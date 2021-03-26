const editPopup = document.querySelector('.popup_type_edit');
const deletePopup = document.querySelector('.popup_type_delete');
const editButton = document.querySelector('.author__button-edit');
const addButton = document.querySelector('.profile__button-add');
const addPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_image');
const formCard = document.querySelector('.form-popup_card');
const formProfile = document.querySelector('.form-popup_profile');
const formAvatar = document.querySelector('.form-popup_edit-avatar');
const formPopupName = document.querySelector('.form-popup__text_form_name');
const formPopupSignature = document.querySelector('.form-popup__text_form_signature');
const cardSection = document.querySelector('.elements');
const avatar = document.querySelector('.author__avatar');
const editAvatarForm = document.querySelector('.popup_type_edit-avatar');
const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: '73564780-432b-4cba-aeaa-8a9eddaf0c27',
    'Content-Type': 'application/json'
  },

};

export { editPopup, editButton, addButton, addPopup, imagePopup, formProfile, formAvatar, formPopupName, formPopupSignature, cardSection, formCard, apiConfig, deletePopup, avatar, editAvatarForm };


