import Views from './views.js';
class CountryView extends Views {
  _parentElement = document.querySelector('.countries-display');

  generateHTML() {
    return ` 
    <div class="country" data-version-name="${this._data[0].name}">
        <img class="country__img" src="${this._data[0].image}" />
        <div class="country-text">
          
            <p class="country-name">${this._data[0].name}</p>
          

          <p>Population <span>${this._data[0].population}</span></p>
          <p>Region <span>${this._data[0].region}</span></p>
          <p>Capital <span>${this._data[0].capital}</span></p>
        </div>
      </div>`;
  }
}

export default new CountryView();
