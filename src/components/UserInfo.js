export class UserInfo {
  constructor({nameProfile, infoProfile}) {
    this._name = document.querySelector(`${nameProfile}`);
    this._info = document.querySelector(`${infoProfile}`);
  }

  getUserInfo() {
    return {
     name: this._name.textContent,
     info: this._info.textContent
    }

  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.signature;
  }
 }

