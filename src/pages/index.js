import './index.css';
import { editPopup, editButton, addButton, addPopup, imagePopup, formProfile, formPopupName, formPopupSignature, cardSection, formCard,apiConfig,deletePopup,avatar,editAvatarForm,formAvatar} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupSubmit } from '../components/PopupSubmit.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { validationConfig, FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api.js';

let userId = null;

//редактировать аватар
avatar.addEventListener('click', () => {
  editavatar.open();
});


//редактировать аватар
const editavatar = new PopupWithForm(editAvatarForm,{
  handleFormSubmit: (item) => {
    editavatar.renderLoading(true);
    api.editAvatar(item.link)
    .then((card) => {
      userInfo.setUserInfo(card);
})
    .catch(err => console.log(`Ошибка обновления аватара: ${err}`))
    .finally(() => editavatar.renderLoading(false));
}});
editavatar.setEventListeners();


//Функция удаления карточки
function deleteCard(cardItem,cardId) {
  popupSubmit.open(cardId,{
    deleteCard: (cardId) => {
      popupSubmit.renderLoading(true);
      api.deleteCard(cardId)
      .then(() => {
        cardItem.remove();
      })
      .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
      .finally(() => popupSubmit.renderLoading(false));
    }});
}


//Функция создания карточки
function createCard(item) {
  const createCard = new Card({data: item,
    handleCardClick: (image,text) => {
      popupImage.open(image, text);
    },
    handleCardDelete: (cardItem,cardId) => {
deleteCard(cardItem,cardId);
    },
    handleCardlike: (cardId,like) => {
      api.setLikeStatus(cardId,like)
      .then((card) => {
        createCard.LikesInfo(card);
      })
      .catch(err => console.log(`Ошибка like: ${err}`))
    },
  }, '#cards',userId);
  const cardElement = createCard.generateCard();
  return cardElement
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Добавляем карточку на сайт
const popupAdd = new PopupWithForm(addPopup,{
  handleFormSubmit: (item) => {
    popupAdd.renderLoading(true);
    api.AddCards(item.name,item.link)
    .then((card) => {
      const cardElement = createCard(card)
      cardList.addItem(cardElement)})
    .catch(err => console.log(`Ошибка добавления карточки: ${err}`))
    .finally(() => popupAdd.renderLoading(false));
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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const popupSubmit = new PopupSubmit(deletePopup);
popupSubmit.setEventListeners();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Прогружаем карточки на странице
const cardList = new Section({
  renderer: (data) => {
    const cardElement = createCard(data)
    cardList.addItem(cardElement);
  }
}, cardSection);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// при клике на редактировать профиль --> открыть попап
const userInfo = new UserInfo(
  {
    nameProfile: '.author__title',
    infoProfile: '.author__subtitle',
    userImg: '.author__avatar'
}
);

const popupEdit = new PopupWithForm(editPopup,{
  handleFormSubmit: (data) => {
    popupEdit.renderLoading(true);
    api.setAuthor(data.name,data.about)
    .then((info) => {
    userInfo.setUserInfo(info)})
    .catch(err => console.log(`Ошибка обновления информации о пользователе: ${err}`))
    .finally(() => popupEdit.renderLoading(false));

  }});
  popupEdit.setEventListeners();
editButton.addEventListener('click', () => {
const currentUserInfo = userInfo.getUserInfo();
formPopupName.value = currentUserInfo.name;
formPopupSignature.value = currentUserInfo.info;
popupEdit.open();
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//валидация для popup_type_edit
const profileFormValidator = new FormValidator(formProfile, validationConfig);
profileFormValidator.enableValidation();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//валидация для popup_type_add-card
const cardFormValidator = new FormValidator(formCard, validationConfig);
cardFormValidator.enableValidation();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//валидация form-popup_edit-avatar
const avatarFormValidator = new FormValidator(formAvatar, validationConfig);
avatarFormValidator.enableValidation();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const api = new Api(apiConfig);
const promises = [api.getAuthоr(),api.getInitialCards()]
Promise.all(promises)
  .then(([userData,cardData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardList.renderItems(cardData.reverse());
  })
  .catch(err => console.log(`Ошибка: ${err}`))
