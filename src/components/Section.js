export class Section {
  constructor({renderer}, cardSelector) {
  this._renderer = renderer;
  this._cardSelector = cardSelector;
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }


  addItem(element) {
    this._cardSelector.prepend(element);
  }

}
