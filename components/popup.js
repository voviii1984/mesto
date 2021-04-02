export default class Popup {
    constructor(popupSelector) {        
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        
        this._submitCheck = this._popupElement.querySelector('.popup__button-check')
    }

    open () {
        this._popupElement.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose)
    }

    close () {
        this._popupElement.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose)
    }
    
    _handleEscClose (evt) {
        if(evt.key === 'Escape') {
            this.close()
        }    
    }

    renderLoading (text) {        
        this._submitCheck.textContent = text
    } 

    setLoading () {
        return this._submitCheck.textContent        
    }
    
    setEventListeners () {
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close()
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close()
            }            
        })
    }

    
}