let openButton = document.querySelector('.profile__popup-button')
let popup = document.querySelector('.popup')
let closeButton = popup.querySelector('.popup__close')
let closeSubmit = popup.querySelector('.form__submit')
let formElement = popup.querySelector('.form')
let profileinfotitle = document.querySelector('.profile__info-title')
let profileinfotext = document.querySelector('.profile__info-text')
let inputname = document.getElementById('inputname')
let inputjob = document.getElementById('inputjob')

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
    inputname.value = profileinfotitle.textContent
    inputjob.value = profileinfotext.textContent
}
addProfileInfo()

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileinfotitle.textContent = inputname.value
    profileinfotext.textContent = inputjob.value    
}

formElement.addEventListener('submit', handleFormSubmit);