export class Card {
    constructor({data, cardSelector, handleCardClick, handelPopupDelete, myCards, handelLike}) {
        this._name = data.name;
        this._link = data.link;
        
        this._cardSelector = document.querySelector(cardSelector);
        this._handleCardClick = handleCardClick;
        this._handelPopupDelete = handelPopupDelete;
        this._myCards = myCards;
        this._myUser = data.owner._id;
        this._handelLike = handelLike;
        this._likes = data.likes;
        
    }

    addCardElement() {        
        this._element = this._getCardElement();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementclose = this._element.querySelector('.element__close');
        this._elementVector = this._element.querySelector('.element__vector');
        this._elementNumber = this._element.querySelector('.element__number');
        this._setListeners();

        this._element.querySelector('.element__text').textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        
        if(this._myCards === this._myUser) {
            this._elementclose.style.display = 'block';
        }
        
        if (this._likes) {
            this._elementNumber.textContent = this._likes.length;
        }
        
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

        this._elementVector.addEventListener('click', () => {
            this._handelLike();
        });            
    }    

    _deleteCard() {
        this._elementclose.addEventListener('click', (evt) => {
            this._handelPopupDelete();
        });        
    };

    deleteCardId() {
        this._element.remove();
        this._element = null
    }
    
    like() {
        return this._like;
      }
    
    myLike(data) {
        this._like = data.likes.filter((item) => {
          return this._myCards === item._id;
        }).length;
        this._elementNumber.textContent = data.likes.length;

        if (this._like) {
            this._elementVector.classList.add('element__vector_active');    
        } else {
            this._elementVector.classList.remove('element__vector_active');
        }
    }
}