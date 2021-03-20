import './index.css'
import Section from '../components/section.js';
import {FormValidator} from '../components/formValidator.js';
import {initialCards, 
        openButton,
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
        dataCardsElements
} from '../utils/constants.js'

import {Card} from '../components/card.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/popupWithImage.js'
import UserInfo from '../components/userInfo.js'

const popupFormAbout = new PopupWithForm('.popup_type_edit', handleFormSubmit)
const popupFormCard = new PopupWithForm('.popup_type_add-card', handleSubmit)
const popupImage = new PopupWithImage(popupTypeImage)
const selectorUserInfo = new UserInfo({selectorinputName: profileinfotitle, selectorinputJob: profileinfotext})

const profileValidate = new FormValidator(parametrValid, typeEdit);
const imageValidate = new FormValidator(parametrValid, typeAddCard);

popupImage.setEventListeners();
popupFormAbout.setEventListeners();
popupFormCard.setEventListeners();

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
    selectorUserInfo.setUserInfo({inputName: inputName.value, inputJob: inputJob.value})
    popupFormAbout.close()   
}

function createCard (item) {
    const card = new Card({data: item, cardSelector: cardTemplateTypeDefault, handleCardClick: () => {
        popupImage.open(item)
        }
    });
    const cardElement = card.addCardElement();
    return cardElement;
}

function addCardSubmit (item) {    
    popupFormCard.close();
    dataCardsElements.prepend(createCard(item));    
    formImage.reset(); 
}

function handleSubmit () {    
    const data = {
        name: addName.value, 
        link: addImage.value
    }    
    addCardSubmit(data);    
}    

const addCardList = new Section({items: initialCards, renderer: (item) => {    
    addCardList.addItem(createCard(item));
    }
}, cardElements);

addCardList.renderItems();

profileValidate.enableValidation();
imageValidate.enableValidation();