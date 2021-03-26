export const validationConfig = {
  formSelector: '.form-popup',
  inputSelector: '.form-popup__text',
  submitButtonSelector: '.form-popup__button-save',
  inactiveButtonClass: 'form-popup__button-save_disabled',
  inputErrorClass: 'form-popup__text_type_error',
};

export class FormValidator {
  constructor(form, config) {
    this._form = form
    this._config = config
    this._button = this._form.querySelector(this._config.submitButtonSelector);
  }

  _setEventListeners() {
    const _inputsList = this._form.querySelectorAll(this._config.inputSelector);
    this._form.addEventListener('reset', () => {
      _inputsList.forEach((inputElement) => {
        this._hideError(inputElement)
      })
      this.setButtonState(false);
    });
    _inputsList.forEach((_input) => {
      _input.addEventListener('input', () => {
        this._checkInputValidity(_input);
        this.setButtonState(this._form.checkValidity());
      });
    });
  }
  _checkInputValidity(_input) {
    if (!_input.validity.valid) {
      this._showError(_input);
    } else {
      this._hideError(_input);
    }
  }
  _showError(_input) {
    const error = this._form.querySelector(`#${_input.id}-error`);
    error.textContent = _input.validationMessage;
    _input.classList.add(this._config.inputErrorClass);
  }
  _hideError(_input) {
    const error = this._form.querySelector(`#${_input.id}-error`);
    error.textContent = '';
    _input.classList.remove(this._config.inputErrorClass);
  }

  setButtonState(_isActive) {
    if (_isActive) {
      this._button.classList.remove(this._config.inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._config.inactiveButtonClass);
      this._button.disabled = true;
    }
  }
  enableValidation() {
    this._setEventListeners();
    this.setButtonState(false);
  };
}



