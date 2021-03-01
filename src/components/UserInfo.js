export class UserInfo {
  constructor(nameProfile, infoProfile) {
    this._name = nameProfile
    this._info = infoProfile
  }

  getUserInfo() {
    return {
     name: this._name,
     info: this._info
    }

  }

  setUserInfo(data) {
    document.querySelector('.author__title').textContent = data.name;
    document.querySelector('.author__subtitle').textContent = data.signature;
  }
 }

