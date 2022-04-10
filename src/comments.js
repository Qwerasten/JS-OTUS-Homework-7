/* этот временный файл с экспериментами будет удален в окончательной версии */

/* вариант с async/await не проходит через сборку
async function getWeather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&
    lang=ru&appid=f20c8916f3149b32453c05ef83ba4f64&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    //weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
} */

/*
пример с яндекс картами
ymaps.ready(init);
  function init() {

    var myMap = new ymaps.Map(mapSurface,
      {
        center: [55.76, 37.64],
        zoom: 7
      });
  } */

// Пытаемся определить местоположение пользователя
/* if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        geolocationSuccess, geolocationFailure);

    result.innerHTML = "Поиск завершен";
}
else {
    result.innerHTML = "Ваш браузер не поддерживает геолокацию";
    goToDefaultLocation();
} */
// getLocation();
/* function geolocationSuccess(position) {
  // Преобразуем местоположение в объект LatLng
  let lat = position.coords.latitude;
  let lon = position.coords.longitude
  var location = new google.maps.LatLng(lat, lon);

  // Отображаем эту точку на карте
  map.setCenter(location);
}

function geolocationFailure(positionError) {
  goToDefaultLocation();
}

function goToDefaultLocation() {
  // Примерные координаты центра Москвы
  var moscow = new google.maps.LatLng(55.753878, 37.649275);
  map.setCenter(moscow);
} */
/*
function getLocation() {
  const url = 'https://get.geojs.io/v1/ip/geo.json';
  fetch(url).then(response => response.json()).then(
    function geoip(data) {
      result.innerHTML = data.city;
      latitude = data.latitude;
      longitude = data.longitude;
      console.log(latitude);
      console.log(longitude);
      //countrycode.textContent = json.country_code;
    });

}
*/
/*

      */
/* <script src="https://api-maps.yandex.ru/2.1/?apikey=4277efd0-35f6-4ae2-996e-d8712b6ff0d8&lang=ru_RU"></script> */
