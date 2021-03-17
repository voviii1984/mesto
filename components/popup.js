export default class Popup {
    constructor(popupSelector) {        
        this._formPopup = document.querySelector(popupSelector);        
    }

    open () {
        this._formPopup.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose)
    }

    close () {
        this._formPopup.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose)
    }
    
    _handleEscClose (evt) {
        if(evt.key === 'Escape') {
            this.close()
        }
    
    }
    
    setEventListeners () {
        this._formPopup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close()
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close()
            }
            if (evt.target.classList.contains('image-container__close')) {
                this.close()
            }
            if (evt.target.classList.contains('popup__content_content_image')) {
                this.close()
            }  
        })
    }
}