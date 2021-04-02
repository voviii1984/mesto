import Popup from "./popup.js";

export default class PopupWithDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popup = this._popupElement.querySelector('.popup__container');       
        this._form = this._popup.querySelector('.popup__form')        
    }

    handleFormSubmitDelete(data) {
        this._handleFormSubmitDelete = data
    }
    
    setEventListeners() {
        super.setEventListeners();        
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._handleFormSubmitDelete();
            })        
    }    
}