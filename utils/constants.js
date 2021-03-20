export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

export const openButton = document.querySelector('.profile__popup-button')
export const popupTypeEdit = document.querySelector('.popup_type_edit')
export const typeEdit = popupTypeEdit.querySelector('.popup__form')
export const formImage = document.getElementById('formImage')
export const profileinfotitle = '.profile__info-title'
export const profileinfotext = '.profile__info-text'
export const inputName = document.getElementById('inputName')
export const inputJob = document.getElementById('inputJob')
export const addButton = document.querySelector('.profile__add-button')
export const popupTypeAddCard = document.querySelector('.popup_type_add-card')
export const typeAddCard = popupTypeAddCard.querySelector('.popup__form')
export const addImage = document.getElementById('addImage')
export const addName = document.getElementById('addName')
export const elementsTemplate = document.querySelector('.card__template').content
export const cardElements = '.elements'
export const popupTypeImage = '.popup_type_image'
export const cardTemplateTypeDefault = '.card__template_type_default'
export const dataCardsElements = document.querySelector(cardElements);

export const parametrValid = {
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__button',
    inputSelector: '.form-text',
    inputErrorClass: 'form-text__error',
    inactiveButtonClass: 'button_inactive',
    errorClass: 'form__input-error_active'
};