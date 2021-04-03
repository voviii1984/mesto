export default class UserInfo {
    constructor({selectorinputName, selectorinputJob, selectorAvatarUser}) {        
        this._popupInputName = document.querySelector(selectorinputName);
        this._popupInputJob = document.querySelector(selectorinputJob);
        this._avatarUser = document.querySelector(selectorAvatarUser);
    }

    getUserInfo() {
        return{ popupInputName: this._popupInputName.textContent,
                popupInputJob: this._popupInputJob.textContent
        }
    }

    setUserInfo(data) {
        this._popupInputName.textContent = data.name;
        this._popupInputJob.textContent = data.about;        
    }

    setAvatarUser(data) {
        this._avatarUser.src = data.avatar;
    }
}