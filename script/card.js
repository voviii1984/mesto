export class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }

    addCardElement() {
        
        this._element = this._getCardElement();
        this._setListeners();

        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;

        return this._element;
    }

    _getCardElement() {
        const htmlElement = elementsTemplate.cloneNode(true);
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
            evt.target.closest('.element').remove();
        });
        
    };

    _like() {        
        this._element.querySelector('.element__vector').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__vector_active');
        });
    };

    _handleSubmit(evt) {
        evt.preventDefault();

        this._name = addName.value;
        this._link = addImage.value;
        
        closePopup(popupTypeAddCard);
        cardElements.prepend(this.addCardElement());
        formImage.reset();
        saveAddCard.setAttribute('disabled', false);
        saveAddCard.classList.add(parametrValid.inactiveButtonClass);
    };    
}

import {parametrValid, formImage, cardElements, popupTypeAddCard, closePopup, saveAddCard, popupTypeImage, openPopup, addImage, addName, elementsTemplate, imageContainerCard, imageContainerText} from './index.js';