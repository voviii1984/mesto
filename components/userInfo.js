export default class UserInfo {
    constructor({selectorinputName, selectorinputJob}) {        
        this._popupInputName = document.querySelector(selectorinputName);
        this._popupInputJob = document.querySelector(selectorinputJob);
    }

    getUserInfo() {
        return{ popupInputName: this._popupInputName.textContent,
                popupInputJob: this._popupInputJob.textContent
        }
    }

    setUserInfo({inputName, inputJob}) {
        this._popupInputName.textContent = inputName;
        this._popupInputJob.textContent = inputJob;
        
    }
}