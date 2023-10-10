export const state = {
  region: {},
  country: {},
};

export const loadRegion = async function (region) {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const countries = await data.json();
    state.region = countries.map(data => {
      return {
        image: data.flags.svg,
        name: data.name.common,
        population: data.population,
        region: data.region,
        capital: data.capital,
      };
    });
    return state.region;
  } catch {
    console.log(`${err}`);
  }
};

export const loadCountry = async function (name) {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const dataJSon = await data.json();
    state.country = dataJSon.map(country => {
      return {
        image: country.flags.svg,
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital,
      };
    });
    // console.log(state.country);
    return state.country;
  } catch (err) {
    console.log(`${err}`);
  }
};
