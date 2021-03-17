import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector) 
        this._handleFormSubmit = handleFormSubmit;
        this._popup = this._formPopup.querySelector('.popup__container');
        this._element = this._popup.querySelector('.popup__form')
        
        this.setEventListeners()
    }

    _getInputValues() {
        this._inputList = this._element.querySelectorAll('.form-text');
    
        this._formValues = {};
        this._inputList.forEach(input => {this._formValues[input.name] = input.value});
    
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        if (this._element) {
            this._element.addEventListener('submit', (evt) => {
                evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
          
            this.close();
            })
        }
    }

    close() {
        super.close();
        this._element.reset();
    }
}