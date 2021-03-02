import './index.css';
import { editPopup, editButton, addButton, addPopup, imagePopup, formProfile, nameOfAuthor, signatureOfAuthor, formPopupName, formPopupSignature, cardSection, formCard, initialCards} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { validationConfig, FormValidator } from '../components/FormValidator.js';



//Функция создания карточки
function createCard(item) {
  const createCard = new Card({data: item,
    handleCardClick: (image,text) => {
      popupImage.open(image, text);
    }
  }, '#cards');
  const cardElement = createCard.generateCard();
  return cardElement
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Добавляем карточку на сайт
const popupAdd = new PopupWithForm(addPopup,{
  handleFormSubmit: (item) => {
    const cardElement = createCard(item)
    cardList.addItem(cardElement);
}});
  popupAdd.setEventListeners();
addButton.addEventListener('click', () => {
    popupAdd.open();
    cardFormValidator.setButtonState(false);
  });
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const popupImage = new PopupWithImage(imagePopup);
popupImage.setEventListeners();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Прогружаем карточки на странице
const cardList = new Section({items: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data)
    cardList.addItem(cardElement);
  }
}, cardSection);
cardList.renderItems();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// при клике на редактировать профиль --> открыть попап
const userInfo = new UserInfo(
  {
    nameProfile: '.author__title',
    infoProfile: '.author__subtitle'
}
);
const popupEdit = new PopupWithForm(editPopup,{
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }});
  popupEdit.setEventListeners();
editButton.addEventListener('click', () => {
const currentUserInfo = userInfo.getUserInfo();
formPopupName.value = currentUserInfo.name;
formPopupSignature.value = currentUserInfo.info;
popupEdit.open();
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//валидация для popup_type_edit / editPopup
const profileFormValidator = new FormValidator(formProfile, validationConfig);
profileFormValidator.enableValidation();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//валидация для popup_type_add-card / addPopup
const cardFormValidator = new FormValidator(formCard, validationConfig);
cardFormValidator.enableValidation();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
