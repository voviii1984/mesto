export class FormValidator {
    constructor(data, formSelector) {
        this._formSelector = data.formSelector
        this._submitButtonSelector = data.submitButtonSelector;
        this._inputSelector = data.inputSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._errorClass = data.errorClass;
        this._formElement = formSelector;
    }

    _showInputError(formTextInput, errorMessage) {
        this._errorTextElement = this._formElement.querySelector(`#${formTextInput.id}Error`);
        formTextInput.classList.add(this._inputErrorClass);
        this._errorTextElement.classList.add(this._errorClass);
        this._errorTextElement.textContent = errorMessage;
    }

    _hideInputError(formTextInput) {
        this._errorTextElement = this._formElement.querySelector(`#${formTextInput.id}Error`);
        formTextInput.classList.remove(this._inputErrorClass);
        formTextInput.classList.remove(this._errorClass);
        this._errorTextElement.textContent = "";
    }

    _isValid(formTextInput) {
        if(!formTextInput.validity.valid) {
            this._showInputError(formTextInput, formTextInput.validationMessage);
        }
        else{
            this._hideInputError(formTextInput);
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
                this._isValid(formTextInput)
                this._toggleButtonState()
            });
        });
    };

    _checkValid() {
        this._inputList.forEach((formTextInput) => {
            this._hideInputError(formTextInput)
        });
    };

    errorValidation() {
        this._checkValid();
        this._toggleButtonState();
    };

    enableValidation() {         
        this._formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });

        this._setEventListeners();              
    };
};