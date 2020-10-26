// Находим формы в DOM
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.author__button-edit');
let closeButton = document.querySelector('.popup__button-close');
let saveButton = document.querySelector('.form-popup__button-save');
let formElement = document.querySelector('.form-popup');
let NameOfAuthor = document.querySelector('.author__title');
let SignatureOfAuthor = document.querySelector('.author__subtitle');
let formPopupName = document.querySelector('.form-popup__name');
let formPopupSignature = document.querySelector('.form-popup__signature');

// Функция открывает и закрывает попап с выводом текста со страницы в value попапа
function openAndClosePopup () {
  if (popup.classList.contains ('popup_opened')) {
    popup.classList.toggle('popup_opened');
  } else {
    popup.classList.toggle('popup_opened');
    formPopupName.setAttribute('value', NameOfAuthor.textContent);
    formPopupSignature.setAttribute('value', SignatureOfAuthor.textContent);
  }
}

function formSubmitHandler (event) {
event.preventDefault();
let newName = formPopupName.value;
let newSignature = formPopupSignature.value;
NameOfAuthor.textContent = newName;
SignatureOfAuthor.textContent = newSignature;
openAndClosePopup ();
}

editButton.addEventListener('click', openAndClosePopup);
closeButton.addEventListener('click', openAndClosePopup);
formElement.addEventListener('submit', formSubmitHandler);
