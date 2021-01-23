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
const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')
const saveElement = document.getElementById('saveElement')
const formElement = document.querySelector('.form')
const profileinfotitle = document.querySelector('.profile__info-title')
const profileinfotext = document.querySelector('.profile__info-text')
const inputName = document.getElementById('inputName')
const inputJob = document.getElementById('inputJob')
const addButton = document.querySelector('.profile__add-button')
const popupMesto = document.getElementById('popupMesto')
const closeAddButton = document.getElementById('closeAddButton')
const closeImageButton = document.getElementById('closeImageButton')
const addImage = document.getElementById('addImage')
const addName = document.getElementById('addName')
const elementsTemplate = document.querySelector('.card__template').content
const cardElement = document.querySelector('.elements')
const saveAddCard = document.getElementById('saveAddCard')
const addForm = document.getElementById('addForm')
const popupImage = document.querySelector('.popup-image')
const popupImageCard = document.querySelector('.popup-image__card')
const popupImageText = document.querySelector('.popup-image__text')

const togglePopup = () => {
    popup.classList.toggle('popup_opened')
}

const togglePopupAdd = () => {
    popupMesto.classList.toggle('popup_opened')
}

const handeladdImag = () => {
    popupImage.classList.toggle('popup_opened')
}

openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)
saveElement.addEventListener('click', togglePopup)
popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        togglePopup()
    }
})

addButton.addEventListener('click', togglePopupAdd)
closeAddButton.addEventListener('click', togglePopupAdd)
saveAddCard.addEventListener('click', togglePopupAdd)
popupMesto.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        togglePopupAdd()
    }
})

closeImageButton.addEventListener('click', handeladdImag)
popupImage.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        handeladdImag()
    }
})

function addProfileInfo() {
    inputName.value = profileinfotitle.textContent
    inputJob.value = profileinfotext.textContent
}
addProfileInfo()

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileinfotitle.textContent = inputName.value
    profileinfotext.textContent = inputJob.value    
}

formElement.addEventListener('submit', handleFormSubmit);

function addCardElement() {
    initialCards.forEach(addElement)
}

function addElement(item) {
    const htmlElement = elementsTemplate.cloneNode(true)
    htmlElement.querySelector('.element__text').textContent = item.name
    htmlElement.querySelector('.element__image').src = item.link
    
    handelElement(htmlElement)
    cardElement.appendChild(htmlElement)  
}

function handleSubmit (evt) {
    evt.preventDefault()
    const htmlElement = elementsTemplate.cloneNode(true)
    htmlElement.querySelector('.element__text').textContent = addName.value
    htmlElement.querySelector('.element__image').src = addImage.value
    
    handelElement(htmlElement)
    cardElement.prepend(htmlElement)    
}
addForm.addEventListener('submit', handleSubmit)

function handelElement(htmlElement) {
    htmlElement.querySelector('.element__close').addEventListener('click', delButton)
    htmlElement.querySelector('.element__vector').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__vector_active')
    })
    
    htmlElement.querySelector('.element__image').addEventListener('click', handeladdImag)
    htmlElement.querySelector('.element__image').addEventListener('click', openImage)
}

function openImage(evt) {
    popupImageCard.src = evt.target.closest('.element').querySelector('.element__image').src
    popupImageText.textContent = evt.target.closest('.element').querySelector('.element__text').textContent
}

addCardElement()

function delButton(evt) {
    evt.target.closest('.element').remove()
}