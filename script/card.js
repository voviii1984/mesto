export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = document.querySelector(cardSelector);
    }

    addCardElement() {        
        this._element = this._getCardElement();
        this._setListeners();

        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        
        return this._element;
    }

    _getCardElement() {
        const htmlElement = this._cardSelector.content.querySelector('.element').cloneNode(true);
        return htmlElement;
    }

    _setListeners() {
        this._delButton();        

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openImage();
        });

        this._like();            
    }

    _openImage() {
        imageContainerCard.src = this._link;
        imageContainerText.textContent = this._name;
        openPopup(popupTypeImage);
    };

    _delButton() {
        this._element.querySelector('.element__close').addEventListener('click', (evt) => {
            this._element.remove();
        });        
    };

    _like() {        
        this._element.querySelector('.element__vector').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__vector_active');
        });
    };    
}

import {popupTypeImage, openPopup, imageContainerCard, imageContainerText} from './utils.js';