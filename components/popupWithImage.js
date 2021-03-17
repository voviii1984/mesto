import Popup from './popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);        
        this._imageContainerCard = this._formPopup.querySelector('.image-container__card');
        this._imageContainerText = this._formPopup.querySelector('.image-container__text');
        this.setEventListeners()
    }

    open(item) {
        super.open();
        this._imageContainerCard.src = item.link;
        this._imageContainerText.textContent = item.name;
    };}