export default class Views {
  _parentElement;
  _data;

  render(data) {
    this._data = data;

    const html = this.generateHTML();

    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
