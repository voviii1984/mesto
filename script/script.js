const initialCards = [
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
  
const openButton = document.querySelector('.profile__popup-button')
const popupTypeEdit = document.querySelector('.popup_type_edit')
const closeButton = document.querySelector('.popup__close')
const saveElement = document.getElementById('saveElement')
const formText = document.querySelector('.form')
const formImage = document.getElementById('formImage')
const profileinfotitle = document.querySelector('.profile__info-title')
const profileinfotext = document.querySelector('.profile__info-text')
const inputName = document.getElementById('inputName')
const inputJob = document.getElementById('inputJob')
const addButton = document.querySelector('.profile__add-button')
const popupTypeAddCard = document.querySelector('.popup_type_add-card')
const closeAddButton = document.getElementById('closeAddButton')
const closeImageButton = document.getElementById('closeImageButton')
const addImage = document.getElementById('addImage')
const addName = document.getElementById('addName')
const elementsTemplate = document.querySelector('.card__template').content
const cardElements = document.querySelector('.elements')
const saveAddCard = document.getElementById('saveAddCard')
const popupTypeImage = document.querySelector('.popup_type_image')
const imageContainerCard = document.querySelector('.image-container__card')
const imageContainerText = document.querySelector('.image-container__text')
const popupContentContentImage = document.querySelector('.popup__content_content_image')


const parametrValid = {
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__button',
    inputSelector: '.form-text',
    inputErrorClass: 'form-text__error',
    inactiveButtonClass: 'button_inactive',
    errorClass: 'form__input-error_active'
}

const openPopup = (popup) => {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeEsc)
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeEsc)
}

openButton.addEventListener('click', () => {
    openPopup(popupTypeEdit)
})

closeButton.addEventListener('click', () => {
    closePopup(popupTypeEdit)
})

popupTypeEdit.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(popupTypeEdit)
    }
})

addButton.addEventListener('click', () => {
    openPopup(popupTypeAddCard)
})

closeAddButton.addEventListener('click', () => {
    closePopup(popupTypeAddCard)
})

popupTypeAddCard.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(popupTypeAddCard)
    }
})

closeImageButton.addEventListener('click', () => {
    closePopup(popupTypeImage)
})

popupContentContentImage.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(popupTypeImage)
    }
})

const closeEsc = function (evt) {
    const activePopup = document.querySelector('.popup_opened')
    if(evt.key === 'Escape') {
        closePopup(activePopup)
    }
} 

function addProfileInfo() {
    inputName.value = profileinfotitle.textContent
    inputJob.value = profileinfotext.textContent
}
addProfileInfo()

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileinfotitle.textContent = inputName.value
    profileinfotext.textContent = inputJob.value
    closePopup(popupTypeEdit)   
}

formText.addEventListener('submit', handleFormSubmit);

function addCardElement() {
    initialCards.forEach((data) => {
        const card = getCardElement(data)
        renderCards(card)    
     })
}

function getCardElement(item) {
    const htmlElement = elementsTemplate.cloneNode(true)
    htmlElement.querySelector('.element__text').textContent = item.name
    htmlElement.querySelector('.element__image').src = item.link
    
    setListeners(htmlElement)
    return htmlElement
}

function renderCards(add) {
    return cardElements.appendChild(add)
}

function handleSubmit (evt) {
    evt.preventDefault()
    const data = {
        name: addName.value, 
        link: addImage.value
    }
    
    closePopup(popupTypeAddCard)
    cardElements.prepend(getCardElement(data))
    formImage.reset()
    enableValidation(parametrValid)
}    

formImage.addEventListener('submit', handleSubmit)

function setListeners(htmlElement) {
    htmlElement.querySelector('.element__close').addEventListener('click', delButton)    
    htmlElement.querySelector('.element__image').addEventListener('click', (open) => {
        openPopup(popupTypeImage)
        openImage(open)
    })
    addLike(htmlElement)    
}

function openImage(evt) {
    imageContainerCard.src = evt.target.closest('.element').querySelector('.element__image').src
    imageContainerText.textContent = evt.target.closest('.element').querySelector('.element__text').textContent
}

addCardElement()

function addLike(elementLike) {
    elementLike.querySelector('.element__vector').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__vector_active')
    })
}

function delButton(evt) {
    evt.target.closest('.element').remove()
}

enableValidation(parametrValid)