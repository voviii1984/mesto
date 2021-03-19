import Popup from './popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);        
        this._imageContainerCard = this._popupElement.querySelector('.image-container__card');
        this._imageContainerText = this._popupElement.querySelector('.image-container__text');        
    }

    open(item) {
        super.open();
        this._imageContainerCard.src = item.link;
        this._imageContainerCard.alt = item.name;
        this._imageContainerText.textContent = item.name;
    };}