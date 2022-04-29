import { getWeather } from "./getweath.js";

export async function loadFirst() {
  const url = "https://get.geojs.io/v1/ip/geo.json";
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");
  let data;
  let fetchRes = 0;

  const { list } = localStorage;
  if (list) citiesList.innerHTML = list;

  fetchRes = await fetch(url);
  if (fetchRes.ok) {
    data = await fetchRes.json();
    city.value = data.city;
    await getWeather();
  }
}
export function addCityToList() {
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");
  const citiesMaxNum = 10;

  for (let i = 0; i < citiesList.options.length; i++) {
    if (citiesList.options[i].textContent === city.value) {
      return;
    }
  }
  citiesList.options[citiesList.options.length] = new Option(city.value);
  if (citiesList.options.length >= citiesMaxNum) {
    citiesList.options[0].remove;
  }
  localStorage.list = citiesList.innerHTML;
}

export async function onWeatherButtonClick() {
  addCityToList();
  await getWeather();
}
export async function onCitiesChange() {
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");
  city.value = citiesList.options[citiesList.selectedIndex].text;
  await getWeather();
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
