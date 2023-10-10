import Views from './views.js';

class RegionView extends Views {
  _parentElement = document.querySelector('.countries-display');
  _data;

  generateHTML() {
    return `
    <div class="country" data-version-name="${this._data.name}" >
        <img class="country__img" src="${this._data.image}" />
        <div class="country-text">
          
            <p class="country-name">${this._data.name}</p>
          

          <p>Population: <span>${this._data.population.toLocaleString()}</span></p>
          <p>Region: <span>${this._data.region}</span></p>
          <p>Capital: <span>${this._data.capital}</span></p>
        </div>
      </div>`;
  }
}

export default new RegionView();
