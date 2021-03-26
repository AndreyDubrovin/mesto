import { Popup } from '../components/Popup.js';

export class PopupSubmit extends Popup {
  constructor(popup) {
    super(popup);
    this._submitButton = this._popup.querySelector('.form-popup__button-save');
    this._button = this._popup.querySelector('button[type="submit"]');
    this._buttonDefaultText = this._button.textContent;
  }

  open(cardId,{deleteCard}) {
    super.open();
    this._deleteCard = deleteCard;
    this._cardId = cardId;
 }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', () => {
     this._popupDelete();
      this.close();
    });
  }

  _popupDelete() {
    this._deleteCard(this._cardId);
 }

 renderLoading(loading) {
  this._button.textContent = loading ? 'Загрузка...' : this._buttonDefaultText;
}


 }
