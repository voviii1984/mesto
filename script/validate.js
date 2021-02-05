const showInputError = (formText, formTextInput, errorMessage, parametrValid) => {
    const errorTextElement = formText.querySelector(`#${formTextInput.id}Error`)
    formTextInput.classList.add(parametrValid.inputErrorClass)
    errorTextElement.textContent = errorMessage
    errorTextElement.classList.add(parametrValid.errorClass)
    
}

const hideInputError = (formText, formTextInput, parametrValid) => {
    const errorTextElement = formText.querySelector(`#${formTextInput.id}Error`)
    formTextInput.classList.remove(parametrValid.inputErrorClass)
    errorTextElement.classList.remove(parametrValid.errorClass)
    errorTextElement.textContent = ""
}

const isValid = (formText, formTextInput, parametrValid) => {
    if(!formTextInput.validity.valid) {
        showInputError(formText, formTextInput, formTextInput.validationMessage, parametrValid)
    }
    else{
        hideInputError(formText, formTextInput, parametrValid)
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((formTextInput) => {
        return !formTextInput.validity.valid
    })
}

const toggleButtonState = (inputList, buttonElement, parametrValid) => {
 if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true)
    buttonElement.classList.add(parametrValid.inactiveButtonClass)
  } else {
    buttonElement.removeAttribute('disabled', false)
    buttonElement.classList.remove(parametrValid.inactiveButtonClass)
    
    }
} 

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(parametrValid.inputSelector))
    const buttonElement = formElement.querySelector(parametrValid.submitButtonSelector)

    toggleButtonState(inputList, buttonElement, parametrValid)
    inputList.forEach((formTextInput) => {
      formTextInput.addEventListener('input', () => {
        isValid(formElement, formTextInput, parametrValid)
        toggleButtonState(inputList, buttonElement, parametrValid)
      })
    })
}

const enableValidation = (parametrValid) => {
    const formList = Array.from(document.querySelectorAll(parametrValid.formSelector))
    formList.forEach((formText) => {
        formText.addEventListener('submit', (evt) => {
        evt.preventDefault()
      })
      
      setEventListeners(formText)
    })
}  