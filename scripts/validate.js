const validationConfig = {
  formSelector: '.form-popup',
  inputSelector: '.form-popup__text',
  submitButtonSelector: '.form-popup__button-save',
  inactiveButtonClass: 'form-popup__button-save_disabled',
  inputErrorClass: 'form-popup__text_type_error',
};
//Функция показывает ошибки
function showError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
}
//Функция убирает ошибки
function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputErrorClass);
}

//Функция проверяет валидность введёных данных
function checkInputValidity(form, input, config) {
  if (!input.validity.valid) {
      showError(form, input, config);
  } else {
      hideError(form, input, config);
  }
}
//Функция контролирует статус кнопки
function setButtonState(button, isActive, config) {
  if (isActive) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
  }
}
// Функция навешивает слушатель на input
function setEventListeners(form, config) {
  const inputsList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  inputsList.forEach((input) => {
      input.addEventListener('input', () => {
          checkInputValidity(form, input, config);
          setButtonState(submitButton, form.checkValidity(), config);
      });
  });
}

//функция включения валидации
function enableValidation (config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
      setEventListeners(form, config);
      const submitButton = form.querySelector(config.submitButtonSelector);
      setButtonState(submitButton, form.checkValidity(), config)
  });
}

// Включаем валидацию
enableValidation(validationConfig);
