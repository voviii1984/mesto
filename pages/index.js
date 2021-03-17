import '../style/index.css'
import Section from '../components/section.js';
import {FormValidator} from '../script/formValidator.js';
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
        parametrValid
} from '../utils/constants.js'

import {Card} from '../script/card.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/popupWithImage.js'
import UserInfo from '../components/userInfo.js'

const popupFormAbout = new PopupWithForm('.popup_type_edit', handleFormSubmit)
const popupFormCard = new PopupWithForm('.popup_type_add-card', handleSubmit)
const popupImage = new PopupWithImage(popupTypeImage)
const selectorUserInfo = new UserInfo({selectorinputName: profileinfotitle, selectorinputJob: profileinfotext})

const profileValidate = new FormValidator(parametrValid, typeEdit);
const imageValidate = new FormValidator(parametrValid, typeAddCard);

addButton.addEventListener('click', () => {
    popupFormCard.open();
})

openButton.addEventListener('click', addProfileInfo)

function addProfileInfo() {
    popupFormAbout.open();
    const addUser = selectorUserInfo.getUserInfo();
    inputName.value = addUser.popupInputName;
    inputJob.value = addUser.popupInputJob;
    profileValidate.errorValidation()
}

function handleFormSubmit () {
    selectorUserInfo.setUserInfo({inputName: inputName.value, inputJob: inputJob.value})
    popupFormAbout.close()   
}

function addCard (item) {
    const card = new Card({data: item, cardSelector: '.card__template_type_default', handleCardClick: () => {
        popupImage.open(item)
        }
    });
    const cardElement = card.addCardElement();
    return cardElement;
}

function handleSubmit () {    
    const data = {
        name: addName.value, 
        link: addImage.value
    }    
      
    popupFormCard.close()
    document.querySelector(cardElements).prepend(addCard(data))
    formImage.reset()
    imageValidate.errorValidation()
}    

const addCardList = new Section({items: initialCards, renderer: (item) => {    
    addCardList.addItem(addCard(item));
    }
}, cardElements);

addCardList.renderItems();

profileValidate.enableValidation();
imageValidate.enableValidation();