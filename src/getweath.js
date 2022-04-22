export async function getWeather() {
  const city = document.querySelector(".city");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const mapSurface = document.querySelector(".mapSurface");
  let latitude = "0";
  let longitude = "0";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&
    lang=ru&appid=f20c8916f3149b32453c05ef83ba4f64&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (data) {
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;

    latitude = data.coord.lat;
    longitude = data.coord.lon;
    mapSurface.src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&spn=0.2,0.2&size=450,450&z=13&l=map`;
    return 1;
  }
  return 0;
}
