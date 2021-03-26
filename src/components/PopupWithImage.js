import { Popup } from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._url = this._popup.querySelector('.popup__image')
    this._name = this._popup.querySelector('.popup__image-title')
  }

  open(url, name) {
    super.open();
    this._url.src = url;
    this._name.textContent = name;
  }
}
