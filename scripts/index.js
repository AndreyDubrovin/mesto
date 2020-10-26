// Находим формы в DOM
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.author__button-edit');
let closeButton = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.form-popup');
let nameOfAuthor = document.querySelector('.author__title');
let signatureOfAuthor = document.querySelector('.author__subtitle');
let formPopupName = document.querySelector('.form-popup__text_form_name');
let formPopupSignature = document.querySelector('.form-popup__text_form_signature');
// Функция открывает и закрывает попап с выводом текста со страницы в value попапа
function openAndClosePopup () {

  if (popup.classList.contains ('popup_opened')) {
    popup.classList.toggle('popup_opened');
  } else {
    let newName = nameOfAuthor.textContent;
    let newSignature = signatureOfAuthor.textContent;
    popup.classList.toggle('popup_opened');
    formPopupName.value = newName;
    formPopupSignature.value = newSignature;
  }
}


function formSubmitHandler (event) {
  event.preventDefault();
  let newName = formPopupName.value;
  let newSignature = formPopupSignature.value;
  nameOfAuthor.textContent = newName;
  signatureOfAuthor.textContent = newSignature;
  openAndClosePopup ();
}

editButton.addEventListener('click', openAndClosePopup);
closeButton.addEventListener('click', openAndClosePopup);
formElement.addEventListener('submit', formSubmitHandler);
