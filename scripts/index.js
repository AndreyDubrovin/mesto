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

// Функция открывает попап
function openPopup (open) {
    open.classList.toggle('popup_opened');
};

// Функция закрывает попап
function closePopup (close) {
  close.classList.toggle('popup_opened');
};

// функция заполняет попап с картинкой

function fillImagePopup (UrlofImage, titleOfImage) {
  image.src = UrlofImage.src;
  imageTitle.textContent = titleOfImage;
};

// Функция изменяет имя автора
function formSubmitHandler (event) {
  event.preventDefault();
  nameOfAuthor.textContent = formPopupName.value;
  signatureOfAuthor.textContent = formPopupSignature.value;
  closePopup (editPopup);
};

// функция создаёт карточку и слушает лайк, корзину и картинка
function createCard(data) {
      const cardsTemplate = document.querySelector('#cards').content;
      const cardElement = cardsTemplate.cloneNode(true);
      const elementPicture = cardElement.querySelector('.element__picture');
      cardElement.querySelector('.element__title').textContent = data.name;
      elementPicture.src = data.link;
      elementPicture.alt = data.name;
      cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
      });
      cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
        const cardItem = evt.target.closest('.element');
        cardItem.remove();
      });
      elementPicture.addEventListener('click', function (evt) {
        const picture = evt.target;
        const name = data.name;
        openPopup (imagePopup);
        fillImagePopup(picture, name);
      });
      return cardElement;
};

// Функция добавляет новую карточку
function addcard (event) {
  event.preventDefault();
  const newcard = [
    {
        name: formPopupNameCard.value,
        link: formPopuplinkCard.value
    }];
    newcard.forEach(function (newcard) {
    const cardElement = createCard(newcard);
    cardSection.prepend(cardElement);
  });
  formCard.reset();
  closePopup(addPopup);
};

// добавляем карточки на страницу
initialCards.forEach(function (initialCards) {
  const cardElement = createCard(initialCards);
  cardSection.append(cardElement);
});

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
