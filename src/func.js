import { getWeather } from "./getweath.js";

export async function loadFirst() {
  const url = "https://get.geojs.io/v1/ip/geo.json";
  const city = document.querySelector(".city");
  let data;
  let fetchRes = 0;
  let weatherRes = 0;

  fetchRes = await fetch(url);
  if (fetchRes) {
    data = await fetchRes.json();
  }
  if (data) {
    city.value = data.city;
    weatherRes = await getWeather();
  }
  return weatherRes;
}
export function addCityToList() {
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");
  const citiesMaxNum = 10;

  let isExist = false;

  for (let i = 0; i < citiesList.options.length; i++) {
    if (citiesList.options[i].textContent === city.value) {
      isExist = true;
    }
  }
  if (!isExist) {
    citiesList.options[citiesList.options.length] = new Option(city.value);
    if (citiesList.options.length >= citiesMaxNum) {
      citiesList.options[0].remove;
    }
  }
}
export async function onWeatherButtonClick() {
  addCityToList();
  const res = await getWeather();
  return res;
}
export async function onCitiesChange() {
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");
  city.value = citiesList.options[citiesList.selectedIndex].text;
  const res = await getWeather();
  return res;
}

export function addOnContentLoader() {
  document.addEventListener("DOMContentLoaded", loadFirst);
}

export function addWeatherButtonClick() {
  const weatherButton = document.querySelector(".weather-button");
  weatherButton.addEventListener("click", onWeatherButtonClick);
}

export function addOnListChange() {
  const citiesList = document.querySelector(".cities-list");
  citiesList.addEventListener("change", onCitiesChange);
}
