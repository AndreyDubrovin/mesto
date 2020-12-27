import { Card } from './Card.js';
import { validationConfig, FormValidator } from './FormValidator.js';
// Находим формы в DOM
const editPopup = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.author__button-edit');
const addButton = document.querySelector('.profile__button-add');
const addPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_image');
const closeButtonProfile = document.querySelector('.popup__button-close_profile');
const closeButtonAddCard = document.querySelector('.popup__button-close_add-card');
const closeButtonImage = document.querySelector('.popup__button-close_image');
const formProfile = document.querySelector('.form-popup_profile');
const nameOfAuthor = document.querySelector('.author__title');
const signatureOfAuthor = document.querySelector('.author__subtitle');
const formPopupName = document.querySelector('.form-popup__text_form_name');
const formPopupSignature = document.querySelector('.form-popup__text_form_signature');
const formPopupNameCard = document.querySelector('.form-popup__text_form_name-of-card');
const formPopuplinkCard = document.querySelector('.form-popup__text_form_link');
const cardSection = document.querySelector('.elements');
const formCard = document.querySelector('.form-popup_card');
const image = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




//Функция обрабатывает кнопку Escape
function closePopupKeyEscape (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

//Функция обрабатывает закрытие popup по overlay
function closePopupClickOverlay (evt) {
  if (evt.target === document.querySelector('.popup_opened')) {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// Функция открывает попап + вешает обработчики ESC и клик по overlay
function openPopup (open) {
    open.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupKeyEscape);
    open.addEventListener('mousedown', closePopupClickOverlay);
};

// Функция закрывает попап + убирает обработчики ESC и клик по overlay
function closePopup (close) {
  close.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupKeyEscape);
  close.removeEventListener('mousedown', closePopupClickOverlay);
};



// Функция изменяет имя автора
function formSubmitHandler (event) {
  event.preventDefault();
  nameOfAuthor.textContent = formPopupName.value;
  signatureOfAuthor.textContent = formPopupSignature.value;
  closePopup (editPopup);
};

function openImagePopup(name, link) {
  openPopup (imagePopup);
  fillImagePopup (name, link);
};

function fillImagePopup (titleOfImage,UrlofImage) {
  image.src = UrlofImage;
  imageTitle.textContent = titleOfImage;
};

// Создаём стартовые карточки
initialCards.forEach((item) => {
	const card = new Card(item, '#cards', openImagePopup);
	const cardElement = card.generateCard();
	cardSection.append(cardElement);
});

// Функция добавляет новую карточку
function addcard (event) {
  event.preventDefault();
  const newcard = [
    {
      name: formPopupNameCard.value,
      link: formPopuplinkCard.value
    }];
    newcard.forEach((item) => {
      const card = new Card(item, '#cards', openImagePopup);
      const cardElement = card.generateCard();
      cardSection.prepend(cardElement);
    }
  );
  formCard.reset();
  const button = formCard.querySelector('.form-popup__button-save');
  cardFormValidator.setButtonState(false);
  closePopup(addPopup);
};

// cлушаем события
editButton.addEventListener('click', () => {
  formPopupName.value = nameOfAuthor.textContent;
  formPopupSignature.value = signatureOfAuthor.textContent;
  openPopup(editPopup);
});
addButton.addEventListener('click', () => {
  openPopup(addPopup);
});
closeButtonProfile.addEventListener('click', () => {
closePopup(editPopup);
});
closeButtonAddCard.addEventListener('click', () => {
  closePopup(addPopup);
});
closeButtonImage.addEventListener('click', () => {
  closePopup(imagePopup);
});
formProfile.addEventListener('submit', formSubmitHandler);
formCard.addEventListener('submit', addcard);

//валидация для popup_type_edit / editPopup
const profileFormValidator = new FormValidator(formProfile, validationConfig);
profileFormValidator.enableValidation();

//валидация для popup_type_add-card / addPopup
const cardFormValidator = new FormValidator(formCard, validationConfig);
cardFormValidator.enableValidation();
