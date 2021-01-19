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
  
let openButton = document.querySelector('.profile__popup-button')
let popup = document.querySelector('.popup')
let closeButton = popup.querySelector('.popup__close')
let closeSubmit = popup.querySelector('.form__submit')
let formElement = popup.querySelector('.form')
let profileinfotitle = document.querySelector('.profile__info-title')
let profileinfotext = document.querySelector('.profile__info-text')
let inputName = document.getElementById('inputName')
let inputJob = document.getElementById('inputJob')

let togglePopup = () => {
    popup.classList.toggle('popup_opened')
}
openButton.addEventListener('click', togglePopup) 
closeButton.addEventListener('click', togglePopup)
closeSubmit.addEventListener('click', togglePopup)
popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        togglePopup()
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

const elementsTemplate = document.querySelector('.card__template').content
const cardElement = document.querySelector('.elements')
/*const delButton = document.querySelector('.element__close')*/
const likeButton = document.querySelector('.element__vector')

function addCardElement() {
    initialCards.forEach(addElement)
}


function addElement(item) {
    const htmlElement = elementsTemplate.cloneNode(true)
    htmlElement.querySelector('.element__text').textContent = item.name
    htmlElement.querySelector('.element__image').src = item.link

    htmlElement.querySelector('.element__close').addEventListener('click', delButton)
    cardElement.appendChild(htmlElement)
}

addCardElement()

function delButton(evt) {
    evt.target.closest('.element').remove()
}