import {
  /* getWeather,
  addCityToList, */
  addOnContentLoader,
  addWeatherButtonClick,
  addOnListChange,
} from "./functions.js";

describe("page functions", () => {
  document.body.innerHTML = `<div>
    <input class="city" type="text" value="Минск" />
  </div>
  <div>
    <select class="cities-list">
      <option value="Воронеж">Воронеж</option>
      <option value="Краснодар">Краснодар</option>
      <option value="Москва">Москва</option>
      <option value="Новосибирск">Новосибирск</option>
    </select>
  </div>
  <button class="weather-button">Погода</button>
  <div class="temperature"></div>
  <div class="weather-description"></div>
  <img class="mapSurface">`;
  /* const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const city = document.querySelector(".city");
  const weatherButton = document.querySelector(".weather-button");
  const citiesList = document.querySelector(".cities-list");
  const mapSurface = document.querySelector(".mapSurface"); */

  addOnContentLoader();
  addWeatherButtonClick();
  addOnListChange();

  jest.spyOn(window, "fetch").mockImplementationOnce(() => "");

  it("testing initial loading", () => {
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  /* it("testing events", () => {
    addOnContentLoader();
    addWeatherButtonClick();
    addOnListChange();
       
    input.value = "test-paragraph";
    input.dispatchEvent(new Event("input"));
    expect(button.style.visibility).toBe("visible");

    button.dispatchEvent(new Event("click"));
    expect(document.querySelectorAll("p").length).toBe(4);
  }); */
});
