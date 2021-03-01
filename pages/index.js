import { editPopup, editButton, addButton, addPopup, imagePopup, formProfile, nameOfAuthor, signatureOfAuthor, formPopupName, formPopupSignature, cardSection, formCard, initialCards} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { validationConfig, FormValidator } from '../components/FormValidator.js';




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// при клике на добавить картинку --> открыть попап
const PopupAdd = new PopupWithForm(addPopup,{
  handleFormSubmit: (item) => {
    const cardAdd = new Section({items: [item],
      renderer: (data) => {
        const createCard = new Card({data: data,
          handleCardClick: (image,text) => {
            popupImage.open(image, text);
          }
        }, '#cards');
        const cardElement = createCard.generateCard();
        cardAdd.addItem(cardElement);
      }
    }, cardSection);
    cardAdd.renderItems();
  }});
  PopupAdd.setEventListeners();
addButton.addEventListener('click', () => {
    PopupAdd.open();
    cardFormValidator.setButtonState(false);
  });
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const popupImage = new PopupWithImage(imagePopup);
popupImage.setEventListeners();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Прогружаем карточки на странице
const cardList = new Section({items: initialCards,
  renderer: (data) => {
    const createCard = new Card({data: data,
      handleCardClick: (image,text) => {
        popupImage.open(image, text);
      }
    }, '#cards');
    const cardElement = createCard.generateCard();
    cardList.addItem(cardElement);
  }
}, cardSection);
cardList.renderItems();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// при клике на редактировать профиль --> открыть попап
const userInfo = new UserInfo(nameOfAuthor.textContent,signatureOfAuthor.textContent);
const PopupEdit = new PopupWithForm(editPopup,{
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }});
PopupEdit.setEventListeners();
editButton.addEventListener('click', () => {
  const userInfo = new UserInfo(nameOfAuthor.textContent,signatureOfAuthor.textContent);
const currentUserInfo = userInfo.getUserInfo();
formPopupName.value = currentUserInfo.name;
formPopupSignature.value = currentUserInfo.info;
PopupEdit.open();

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
