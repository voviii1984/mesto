export class Card {
    constructor({data, cardSelector, handleCardClick}) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = document.querySelector(cardSelector);
        this._handleCardClick = handleCardClick;
    }

    addCardElement() {        
        this._element = this._getCardElement();
        this._elementImage = this._element.querySelector('.element__image');
        this._setListeners();

        this._element.querySelector('.element__text').textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        
        return this._element;
    }

    _getCardElement() {
        const htmlElement = this._cardSelector.content.querySelector('.element').cloneNode(true);
        return htmlElement;
    }

    _setListeners() {
        this._deleteCard();        

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick();
        });

        this._like();            
    }    

    _deleteCard() {
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