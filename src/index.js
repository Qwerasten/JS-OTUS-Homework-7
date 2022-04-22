import "./style.css";
import {
  addOnContentLoader,
  addWeatherButtonClick,
  addOnListChange,
} from "./func.js";

/* const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");
const weatherButton = document.querySelector(".weather-button");
const citiesList = document.querySelector(".cities-list");
const mapSurface = document.querySelector(".mapSurface");
const citiesMaxNum = 10; */
/* latitude = "0";возможно их надо импортировать из func, переделала для теста, не проверяла
longitude = "0"; */

addOnContentLoader();
addWeatherButtonClick();
addOnListChange();
