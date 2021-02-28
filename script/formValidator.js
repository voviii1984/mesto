export class FormValidator {
    constructor(data, formElement) {
        this._formSelector = data.formSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inputSelector = data.inputSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._errorClass = data.errorClass;
        this._formElement = formElement;        
    }

    _showInputError(formText, formTextInput, errorMessage) {
        this._errorTextElement = formText.querySelector(`#${formTextInput.id}Error`);
        formTextInput.classList.add(this._inputErrorClass);
        this._errorTextElement.classList.add(this._errorClass);
        this._errorTextElement.textContent = errorMessage;
    }

    _hideInputError(formText, formTextInput) {
        this._errorTextElement = formText.querySelector(`#${formTextInput.id}Error`);
        formTextInput.classList.remove(this._inputErrorClass);
        this._errorTextElement.classList.remove(this._errorClass);
        this._errorTextElement.textContent = "";
    }

    _isValid(formText, formTextInput) {
        if(!formTextInput.validity.valid) {
            this._showInputError(formText, formTextInput, formTextInput.validationMessage);
        }
        else{
            this._hideInputError(formText, formTextInput);
        };
    };

    _hasInvalidInput() {
        return this._inputList.some((formTextInput) => {
            return !formTextInput.validity.valid;
        });
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.setAttribute('disabled', true);
            this._buttonElement.classList.add(this._inactiveButtonClass);
          } else {
            this._buttonElement.removeAttribute('disabled', false);
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            };
    };

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonState();
        this._inputList.forEach((formTextInput) => {
            formTextInput.addEventListener('input', () => {
                this._isValid(this._formElement, formTextInput)
                this._toggleButtonState()
            });
        });
    };

    enableValidation() {
        this._setEventListeners();       
    };
};

