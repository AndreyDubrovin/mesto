const editPopup = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.author__button-edit');
const addButton = document.querySelector('.profile__button-add');
const addPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_image');
const formProfile = document.querySelector('.form-popup_profile');
const nameOfAuthor = document.querySelector('.author__title');
const signatureOfAuthor = document.querySelector('.author__subtitle');
const formPopupName = document.querySelector('.form-popup__text_form_name');
const formPopupSignature = document.querySelector('.form-popup__text_form_signature');
const cardSection = document.querySelector('.elements');
const formCard = document.querySelector('.form-popup_card');
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

export { editPopup, editButton, addButton, addPopup, imagePopup, formProfile, nameOfAuthor, signatureOfAuthor, formPopupName, formPopupSignature, cardSection, formCard, initialCards};
