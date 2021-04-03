import {Api} from '../components/api.js'
import './index.css'
import Section from '../components/section.js';
import {FormValidator} from '../components/formValidator.js';
import {openButton,
        typeEdit,
        formImage, 
        profileinfotitle, 
        profileinfotext,
        inputJob,
        inputName,
        addButton,
        typeAddCard,
        addImage,
        addName,    
        cardElements,
        popupTypeImage,
        parametrValid,
        cardTemplateTypeDefault,
        profileAvatarChange,
        addAvatar,
        profileAvatar,
        typeAvatar,
        options
        
} from '../utils/constants.js'

import {Card} from '../components/card.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/popupWithImage.js'
import UserInfo from '../components/userInfo.js'
import PopupWithDelete from '../components/popupWithDelete.js'
let myCards = ''

const api = new Api(options);

const popupDelete = new PopupWithDelete('.popup_type_delete')
const popupFormAbout = new PopupWithForm('.popup_type_edit', handleFormSubmit)
const popupFormCard = new PopupWithForm('.popup_type_add-card', handleSubmit)
const popupFormAvatar = new PopupWithForm('.popup_type_avatar', addNewAvatar)
const popupImage = new PopupWithImage(popupTypeImage)
const selectorUserInfo = new UserInfo({selectorinputName: profileinfotitle, selectorinputJob: profileinfotext, selectorAvatarUser: profileAvatar})

const profileValidate = new FormValidator(parametrValid, typeEdit);
const imageValidate = new FormValidator(parametrValid, typeAddCard);
const avatarValidate = new FormValidator(parametrValid, typeAvatar);

popupDelete.setEventListeners();
popupFormAvatar.setEventListeners();
popupImage.setEventListeners();
popupFormAbout.setEventListeners();
popupFormCard.setEventListeners();

/*function renderLoading(isLoading) {
    if(isLoading) {
        popupButton.textContent = "Сохранение..."
    } else {
        return popupButton.textContent
    }
}*/

profileAvatarChange.addEventListener('click', () => {
    popupFormAvatar.open();
    avatarValidate.changeButtonStateByValidation();
})

addButton.addEventListener('click', () => {
    popupFormCard.open();
    imageValidate.changeButtonStateByValidation()
})

openButton.addEventListener('click', addProfileInfo)

function addProfileInfo() {
    popupFormAbout.open();
    
    const addUser = selectorUserInfo.getUserInfo();
    inputName.value = addUser.popupInputName;
    inputJob.value = addUser.popupInputJob;
    
    profileValidate.changeButtonStateByValidation();    
}

function handleFormSubmit () {
    const check = popupFormAbout.setLoading()
    popupFormAbout.renderLoading("Загрузка...")
    const dataProfile = {
        name: inputName.value, 
        about: inputJob.value
    }
    api.getProfile(dataProfile)
    .then((res) => {              
        selectorUserInfo.setUserInfo(res)
        popupFormAbout.close()       
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
    })
    .finally(() => {
        popupFormAbout.renderLoading(check)
    })
}

function addNewAvatar () {
    const check = popupFormAvatar.setLoading()
    popupFormAvatar.renderLoading("Сохранение...")
    
    const dataAvatar = {
        avatar: addAvatar.value
    }
    
    api.putAvatar(dataAvatar)
    .then((dataAvatar) => {        
        selectorUserInfo.setAvatarUser(dataAvatar)
        popupFormAvatar.close()
        
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
    })
    .finally(() => {
        popupFormAvatar.renderLoading(check)
    })
}

function handelDelete (item, cards){
    popupDelete.open()
    popupDelete.handleFormSubmitDelete(() => {
        api.deleteCard(item._id)
        .then(() => {
            cards.deleteCardId()
            popupDelete.close()
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
        });
    })   
}

function handelPutLike(cards, data) {
    if (cards.like()) {
        api.deleteLike(data._id)
          .then((data) => {
            cards.myLike(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
        });
    } else {
        api.putLike(data._id)
          .then((data) => {
            cards.myLike(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
        });
    }
}

function createCard (item, myCards) {
    const card = new Card({data: item, cardSelector: cardTemplateTypeDefault, 
        handleCardClick: () => {
            popupImage.open(item)
        },
        handelPopupDelete: () => {            
            handelDelete(item, card)
        },
        myCards,
        handelLike: () => {
            handelPutLike(card, item)
        }
    });
    const cardElement = card.addCardElement();
    card.myLike(item)
    return cardElement;
}

function addCardSubmit () {    
    popupFormCard.close();        
    formImage.reset(); 
}

function handleSubmit () {
    const check = popupFormCard.setLoading()
    popupFormCard.renderLoading("Сохранение...")
    const data = {
        name: addName.value, 
        link: addImage.value
    }    
    api.getNewCard(data)
    .then((data) => {
        addCardSubmit();
        addCardList.addItem(createCard(data, myCards));        
    })   
    .catch((err) => {
        console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
    })
    .finally(() => {
        popupFormCard.renderLoading(check)
    })    
}    

const addCardList = new Section({renderer: (item) => {    
    addCardList.addItem(createCard(item, myCards));
    }
    }, cardElements);
    
Promise.all([api.getInitialCards(), api.userInfo()])
    .then(([cards, getuserInfo]) => {
        myCards = getuserInfo._id;

        addCardList.renderItems(cards);
        selectorUserInfo.setUserInfo(getuserInfo);
        selectorUserInfo.setAvatarUser(getuserInfo);        
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
    });

profileValidate.enableValidation();
imageValidate.enableValidation();
avatarValidate.enableValidation();