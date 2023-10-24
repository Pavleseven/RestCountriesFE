import * as config from "./src/config.js";
import { countryTextDisplay, grow, shrink } from "./src/helper.js";
import regionView from "./src/views/regionView.js";
import * as model from "./src/model.js";
import countryView from "./src/views/countryView.js";

const regionContainer = document.querySelector(".region-filter");
const region = document.querySelector(".region");
const continents = document.querySelector(".continents");
const countryDisplayContainer = document.querySelector(".countries-display");
const searchResult = document.querySelector(".submit-field");
const input = document.querySelector(".input-value");
const h1 = document.querySelector(".main-h1");
const navigation = document.querySelector(".navigation");
const inputBody = document.querySelector(".input");
const body = document.getElementsByName("body");
const darkLight = document.querySelector(".mode");
const continentsP = document.querySelectorAll(".continents-p");
const regionP = document.querySelector(".region-p");
const displayMode = document.querySelector(".display-mode");
const country = document.querySelector(".country");
const modeImg = document.querySelector(".mode-image");
const overlayHead = document.querySelector(".overlay-head");
const overlaySpan = document.querySelectorAll(".overlay-span");
const borderP = document.querySelector(".border-p");

const overlayNative = document.querySelector(".overlay-native");
const overlayPopulation = document.querySelector(".overlay-population");
const overlayRegion = document.querySelector(".overlay-region");
const overlaySubRegion = document.querySelector(".overlay-subregion");
const overlayCapital = document.querySelector(".overlay-capital");
const overlayTLD = document.querySelector(".overlay-tld");
const overlayCurrencies = document.querySelector(".overlay-currencies");
const overlayLanguages = document.querySelector(".overlay-languages");
const allBordedCountries = document.querySelectorAll(".border-country");
const borderCountry1 = document.querySelector(".border-country-1");
const borderCountry2 = document.querySelector(".border-country-2");
const borderCountry3 = document.querySelector(".border-country-3");
const overlayBorder = document.querySelector(".overlay-border");
const overlayImage = document.querySelector(".overlay-image");

const controllRegion = async function (region) {
  try {
    const data = await model.loadRegion(region);
    data.forEach((country) => {
      regionView.render(country);
    });
    countryTextDisplay(displayMode, countryDisplayContainer);
  } catch (err) {
    console.log(`${err}`);
  }
};

continents.addEventListener("click", function (e) {
  const region = e.target.innerHTML;
  renderSpinner();
  shrink(regionContainer, continents);
  setTimeout(() => {
    countryDisplayContainer.innerHTML = "";
    controllRegion(region);
  }, 1000);
});

displayMode.addEventListener("click", function (e) {
  if (displayMode.classList.contains("active")) {
    h1.style.color = "white";
    navigation.style.backgroundColor = "hsl(209, 23%, 22%)";
    darkLight.style.color = "white";
    inputBody.style.backgroundColor = "hsl(207, 26%, 17%)";
    regionContainer.style.backgroundColor = "hsl(209, 23%, 22%)";
    regionP.style.color = "hsl(0, 0%, 52%)";
    continentsP.forEach((el) => (el.style.color = "hsl(0, 0%, 52%)"));
    countryDisplayContainer.style.backgroundColor = "hsl(207, 26%, 17%)";
    input.style.backgroundColor = "hsl(209, 23%, 22%)";

    modeImg.innerHTML = '<img src="./images/moon-solid.svg" alt="">';
    overlay.style.backgroundColor = "hsl(207, 26%, 17%)";
    overlayButton.style.backgroundColor = "hsl(209, 23%, 22%)";
    overlayButton.style.boxShadow = "0 0 5px rgb(5,10,13)";

    overlayButton.style.color = "white";
    overlayContent.style.color = "white";
    overlayHead.style.color = "white";
    overlaySpan.forEach((el) => (el.style.color = "hsl(0, 0%, 52%)"));
    borderP.style.color = "white";
    allBordedCountries.forEach(
      (el) => (el.style.backgroundColor = "hsl(209, 23%, 22%)")
    );
    Array.from(countryDisplayContainer.children).forEach(
      (el) => (
        (el.style.backgroundColor = "hsl(209, 23%, 22%)"),
        (el.style.color = "white")
      )
    );
    displayMode.classList.remove("active");
  } else {
    h1.style.color = "hsl(200, 15%, 8%)";
    navigation.style.backgroundColor = "white";
    darkLight.style.color = "hsl(200, 15%, 8%)";
    inputBody.style.backgroundColor = "white";
    regionContainer.style.backgroundColor = "white";
    regionP.style.color = "hsl(200, 15%, 8%)";
    continentsP.forEach((el) => (el.style.color = "hsl(200, 15%, 8%)"));
    countryDisplayContainer.style.backgroundColor = "white";
    input.style.backgroundColor = "white";
    modeImg.innerHTML = '<img src="./images/moon-regular (1).svg" alt="" />';
    overlay.style.backgroundColor = "white";
    overlayButton.style.backgroundColor = "white";
    overlayButton.style.color = "hsl(200, 15%, 8%)";
    overlayButton.style.boxShadow = "0 0 0 #FFF";
    overlayContent.style.color = "hsl(200, 15%, 8%)";
    overlayHead.style.color = "hsl(200, 15%, 8%)";
    overlaySpan.forEach((el) => (el.style.color = "hsl(200, 15%, 8%)"));
    borderP.style.color = "hsl(200, 15%, 8%)";
    allBordedCountries.forEach((el) => (el.style.backgroundColor = "white"));
    Array.from(countryDisplayContainer.children).forEach(
      (el) => (
        (el.style.backgroundColor = "white"),
        (el.style.color = "hsl(200, 15%, 8%)")
      )
    );
    displayMode.classList.add("active");
  }
});

// console.log(country.children);

region.addEventListener("click", function (e) {
  const target = e.target.closest(".region");
  if (!target) return;
  if (continents.classList.contains("hidden")) {
    grow(regionContainer, continents);
  } else {
    shrink(regionContainer, continents);
  }
});

const renderSpinner = function () {
  const html = `
    <div class="spinner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1.6rem"
        height="1.6rem"
      >
        <path
          d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
        />
      </svg>
    </div>`;
  countryDisplayContainer.innerHTML = "";
  countryDisplayContainer.insertAdjacentHTML("afterbegin", html);
};

const testCountry = async function (name) {
  try {
    const dataJSon = await model.loadCountry(name);

    renderSpinner();
    setTimeout(() => {
      countryDisplayContainer.innerHTML = "";
      countryView.render(dataJSon);
    }, 300);
  } catch {
    console.log("error");
  }
};
const testCountry2 = async function (name) {
  try {
    const dataJSon = await model.loadCountry(name);

    countryView.render(dataJSon);
  } catch (err) {
    console.log(`${err}`);
  }
};

testCountry2("germany");
testCountry2("united states of america");
testCountry2("brazil");
testCountry2("iceland");
testCountry2("austria");
testCountry2("serbia");
testCountry2("albania");
testCountry2("algeria");

//
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  testCountry(input.value);
  input.value = "";
});

// Dark/light mode
const overlayContent = document.querySelector(".overlay-content");
const overlayButton = document.querySelector(".overlay-button");
const overlayCountry = async function (name) {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const dataJSon = await data.json();
    console.log(dataJSon);
    overlayHead.innerHTML = `${dataJSon[0].name.common}`;
    overlayNative.innerHTML = `${dataJSon[0].name.official}`;
    overlayPopulation.innerHTML = `${dataJSon[0].population.toLocaleString()}`;
    overlayRegion.innerHTML = `${dataJSon[0].region}`;
    overlaySubRegion.innerHTML = `${dataJSon[0].subregion}`;
    overlayCapital.innerHTML = `${dataJSon[0].capital[0]}`;
    overlayTLD.innerHTML = `${dataJSon[0].tld?.[0] ?? "none"}`;
    overlayCurrencies.innerHTML = `${
      Object.values(dataJSon[0].currencies)[0].symbol
    }`;
    overlayLanguages.innerHTML = `${Object.values(dataJSon[0].languages)[0]}`;
    borderCountry1.innerHTML = `${dataJSon[0].borders?.[0] ?? "/"}`;
    borderCountry2.innerHTML = `${dataJSon[0].borders?.[1] ?? "/"}`;
    borderCountry3.innerHTML = `${dataJSon[0].borders?.[2] ?? "/"}`;
    const html = `

        
        <img src="${dataJSon[0].flags.svg}" alt="">
        `;
    overlayImage.innerHTML = "";
    overlayImage.insertAdjacentHTML("afterbegin", html);
  } catch {
    console.log(`${err}`);
  }
};
// overlayCountry('iceland');
const overlay = document.querySelector(".overlay");
countryDisplayContainer.addEventListener("click", function (e) {
  const target = e.target.closest(".country");
  const targetAttr = target.getAttribute("data-version-name");

  if (!targetAttr) return;
  overlayCountry(targetAttr);
  // document.body.style.overflow = 'hidden';
  overlay.classList.add("overlay-transform");
  overlay.style.display = "block";
  navigation.style.display = "none";
  inputBody.style.display = "none";
  countryDisplayContainer.style.display = "none";
});

overlayButton.addEventListener("click", function () {
  overlay.classList.remove("overlay-transform");
  overlay.style.display = "none";
  navigation.style.display = "flex";
  inputBody.style.display = "block";
  countryDisplayContainer.style.display = "flex";
  // document.body.style.overflow = 'visible';
});

overlayBorder.addEventListener("click", function (e) {
  console.log(e.target.closest(".border-country"));
  console.log(e.target.closest(".border-country").innerHTML);
});
