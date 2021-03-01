import { Popup } from '../components/Popup.js';

export class PopupWithImage extends Popup {

  open(url,name) {
    super.open();
    this._popup.querySelector('.popup__image').src = url;
    this._popup.querySelector('.popup__image-title').textContent = name;
 }
 }
