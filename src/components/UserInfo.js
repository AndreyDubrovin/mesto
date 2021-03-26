export class UserInfo {
  constructor({ nameProfile, infoProfile, userImg }) {
    this._name = document.querySelector(`${nameProfile}`);
    this._info = document.querySelector(`${infoProfile}`);
    this._userImg = document.querySelector(`${userImg}`);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent
    }

  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.about;
    this._userImg.style.backgroundImage = `url(${data.avatar})`;
  }
}

