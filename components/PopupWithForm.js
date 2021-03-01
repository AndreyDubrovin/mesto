import { Popup } from '../components/Popup.js';

export class PopupWithForm extends Popup {
  constructor(popup,{handleFormSubmit}) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.form-popup');
  }

 _getInputValues() {
this._inputList = this._popup.querySelectorAll('.form-popup__text');
this._formValues = {};
this._inputList.forEach(input => this._formValues[input.name] = input.value);
  return this._formValues;
 }

 setEventListeners() {
  super.setEventListeners();
  this._popup.addEventListener('submit', (evt) => {
    evt.preventDefault();
this._handleFormSubmit(this._getInputValues());
    this.close();
  });
}

 close() {
  super.close();
  this._popupForm.reset();
}
}
