export const options = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/',
  headers: {
    authorization: '6ce8c48d-6e8a-4e63-a71a-59f4fb098162',
    'Content-Type': 'application/json'
  }
}; 

export const openButton = document.querySelector('.profile__popup-button')
export const popupTypeEdit = document.querySelector('.popup_type_edit')
export const typeEdit = popupTypeEdit.querySelector('.popup__form')
export const formImage = document.getElementById('formImage')
export const profileinfotitle = '.profile__info-title'
export const profileinfotext = '.profile__info-text'
export const profileAvatar = '.profile__avatar'
export const inputName = document.getElementById('inputName')
export const inputJob = document.getElementById('inputJob')
export const addButton = document.querySelector('.profile__add-button')
export const popupTypeAddCard = document.querySelector('.popup_type_add-card')
export const typeAddCard = popupTypeAddCard.querySelector('.popup__form')
export const popupTypeAvatar = document.querySelector('.popup_type_avatar')
export const typeAvatar = popupTypeAvatar.querySelector('.popup__form')
export const addImage = document.getElementById('addImage')
export const addName = document.getElementById('addName')
export const elementsTemplate = document.querySelector('.card__template').content
export const cardElements = '.elements'
export const popupTypeImage = '.popup_type_image'
export const cardTemplateTypeDefault = '.card__template_type_default'
export const dataCardsElements = document.querySelector(cardElements);
export const profileAvatarChange = document.querySelector('.profile__change');
export const addAvatar = document.getElementById('addAvatar');
//export const popupButton = document.querySelector('.popup__button')

export const parametrValid = {
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__button',
    inputSelector: '.form-text',
    inputErrorClass: 'form-text__error',
    inactiveButtonClass: 'button_inactive',
    errorClass: 'form__input-error_active'
};