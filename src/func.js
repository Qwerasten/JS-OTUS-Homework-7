import { getWeather } from "./getweath.js";

export async function loadFirst() {
  const url = "https://get.geojs.io/v1/ip/geo.json";
  const city = document.querySelector(".city");
  let wth = 1;
  let data;

  const res = await fetch(url);
  if (res) {
    data = await res.json();
  }
  if (data) {
    city.value = data.city;
    wth = await getWeather();
  }
  return wth;
}
export function addOnContentLoader() {
  document.addEventListener("DOMContentLoaded", loadFirst);
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

export function addWeatherButtonClick() {
  const weatherButton = document.querySelector(".weather-button");
  weatherButton.addEventListener("click", async () => {
    addCityToList();
    const res = await getWeather();
    return res;
  });
}

export function addOnListChange() {
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");
  citiesList.addEventListener("change", async () => {
    city.value = citiesList.options[citiesList.selectedIndex].text;
    const res = await getWeather();
    return res;
  });
}
