let openButton = document.querySelector('.profile__popup-button')
let popup = document.querySelector('.popup')
let closeButton = popup.querySelector('.popup__close')
let closeSubmit = popup.querySelector('.form__submit')

let togglePopup = () => {
    popup.classList.toggle('popup__opened')
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
    let profileinfotitle = document.querySelector('.profile__info-title')
    let forminputname = document.querySelector('.form__input-name')
    let profileinfotext = document.querySelector('.profile__info-text')
    let forminputjob = document.querySelector('.form__input-job')

    forminputname.classList.add('form__input-name')
    forminputname.value = profileinfotitle.textContent

    forminputjob.classList.add('form__input-job')
    forminputjob.value = profileinfotext.textContent
}
addProfileInfo()

let formElement = popup.querySelector('.form')// Воспользуйтесь методом querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();
                        // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.
                        // Находим поля формы в DOM
    let nameInput = popup.querySelector('.form__input-name')// Воспользуйтесь инструментом .querySelector()
    let jobInput = popup.querySelector('.form__input-job')
    let profileinfotitle = document.querySelector('.profile__info-title')
    let profileinfotext = document.querySelector('.profile__info-text')// Воспользуйтесь инструментом .querySelector()
    profileinfotitle.textContent = nameInput.value
    profileinfotext.textContent = jobInput.value
        // Получите значение полей из свойства value
        // Выберите элементы, куда должны быть вставлены значения полей
        // Вставьте новые значения с помощью textContent
        
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);