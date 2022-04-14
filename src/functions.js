let latitude = "0";
let longitude = "0";

export function getWeather() {
  const city = document.querySelector(".city");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&
    lang=ru&appid=f20c8916f3149b32453c05ef83ba4f64&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector(".temperature");
      const weatherDescription = document.querySelector(".weather-description");
      const mapSurface = document.querySelector(".mapSurface");

      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;

      latitude = data.coord.lat;
      longitude = data.coord.lon;
      mapSurface.src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&spn=0.2,0.2&size=450,450&z=13&l=map`;
    });
}

export function addOnContentLoader() {
  document.addEventListener("DOMContentLoaded", () => {
    const url = "https://get.geojs.io/v1/ip/geo.json";
    const city = document.querySelector(".city");

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.value = data.city;
        getWeather();
      });
  });
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

  weatherButton.addEventListener("click", () => {
    addCityToList();
    getWeather();
  });
}

export function addOnListChange() {
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");

  citiesList.addEventListener("change", () => {
    city.value = citiesList.options[citiesList.selectedIndex].text;
    getWeather();
  });
}
