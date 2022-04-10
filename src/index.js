// const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");
const weatherButton = document.querySelector(".weather-button");
const citiesList = document.querySelector(".cities-list");
const mapSurface = document.querySelector(".mapSurface");

let latitude = "0";
let longitude = "0";

function getWeather() {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&
    lang=ru&appid=f20c8916f3149b32453c05ef83ba4f64&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;
      latitude = data.coord.lat;
      longitude = data.coord.lon;
      mapSurface.src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&spn=0.2,0.2&size=450,450&z=13&l=map`;
    });
  // weatherIcon.classList.add(`owf-${data.weather[0].id}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const url = "https://get.geojs.io/v1/ip/geo.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.value = data.city;
      getWeather();
    });
});

weatherButton.addEventListener("click", () => {
  citiesList.options[citiesList.options.length] = new Option(city.value);
  if (citiesList.options.length >= 10) {
    citiesList.options[0].remove;
  }
  getWeather();
});

citiesList.addEventListener("change", () => {
  city.value = citiesList.options[citiesList.selectedIndex].text;
  getWeather();
});
