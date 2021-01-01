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