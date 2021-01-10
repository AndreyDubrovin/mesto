export class Card {
	constructor(data, cardSelector, openImagePopup) {
		this._text = data.name;
		this._image = data.link;
    this._cardSelector = cardSelector;
    this._openImagePopup = openImagePopup;
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
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick();
    }); 
  }

  _handleLikeClick() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleDeleteClick() {
    const cardItem = this._element.querySelector('.element__delete').closest('.element');
    cardItem.remove();
  }

  _handleImageClick() {
    this._openImagePopup(this._text, this._image);
  }

}


