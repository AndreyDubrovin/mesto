export class Card {
	constructor({data,handleCardClick,handleCardDelete,handleCardlike},cardSelector,userId) {
    this._text = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._currectUser = userId;
    this._imageClick = handleCardClick;
    this._cardDelete = handleCardDelete;
    this._cardLike = handleCardlike;
    this._cardSelector = cardSelector;

	}

	_getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__picture')
    this._cardImage.src = this._image;
    this._cardImage.alt = this._text;
    this._element.querySelector('.element__title').textContent = this._text;
    this._updateLikes();
    this._setEventListeners();
    if (this._currectUser === this._ownerId) {
      this._element.querySelector('.element__delete').classList.add('element__delete_type_visible');
    } else {
      this._element.querySelector('.element__delete').classList.add('element__delete_type_hidden');
    }
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this.handleDeleteClick();
    });
    this._cardImage.addEventListener('click', () => {
       this.handleCardClick();
    });
  }


  _updateLikes() {
    this._element.querySelector('.element__like-counter').textContent = this._likes.length;

    if (this.isLiked()) {
      this._element.querySelector('.element__like').classList.add('element__like_active');
    } else {
      this._element.querySelector('.element__like').classList.remove('element__like_active');
    }
  }

  isLiked() {
    return Boolean(this._likes.find(item => item._id === this._currectUser));
  }

  LikesInfo(data) {
    this._likes = data.likes;
    this._updateLikes();
  }

_handleLikeClick() {
  this._updateLikes();
  this._cardLike(this._cardId,this.isLiked());
  }

  handleDeleteClick() {
    const cardItem = this._element.querySelector('.element__delete').closest('.element');
    this._cardDelete(cardItem,this._cardId);
  }

  handleCardClick() {
    this._imageClick(this._image,this._text);
  }

}


