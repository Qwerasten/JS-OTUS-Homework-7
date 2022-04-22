import fetchMock from "jest-fetch-mock";
import { addCityToList, loadFirst, onWeatherButtonClick } from "./func.js";

import * as getWeatherFT from "./getweath.js";

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
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const city = document.querySelector(".city");
  const citiesList = document.querySelector(".cities-list");

  fetchMock.enableMocks();

  it("testing getWeather set data", async () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        main: { temp: 25 },
        weather: [{ description: "cloudly" }],
        coord: { lat: "37.677751", lon: "55.757718" },
      })
    );
    const res = await getWeatherFT.getWeather();
    expect(res).toEqual(1);
    expect(temperature.textContent).toEqual(`25°C`);
    expect(weatherDescription.textContent).toEqual(`cloudly`);
  });

  it("testing initial loader", async () => {
    fetch.resetMocks();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ city: "Казань" }),
      })
    );
    const mock = jest.spyOn(getWeatherFT, "getWeather");
    mock.mockImplementation(() => 1);
    const res = await loadFirst();
    expect(res).toEqual(1);
    expect(city.value).toEqual(`Казань`);
  });

  it("testing add existing city", () => {
    city.value = "Воронеж";
    addCityToList();
    expect(citiesList.options.length).toEqual(4);
  });

  it("testing add new city", () => {
    city.value = "Томск";
    addCityToList();
    expect(citiesList.options.length).toEqual(5);
    expect(citiesList.options[4].textContent).toEqual("Томск");
  });
  it("testing show typed city", async () => {
    const mock = jest.spyOn(getWeatherFT, "getWeather");
    mock.mockImplementation(() => 1);
    const res = await onWeatherButtonClick();
    expect(res).toEqual(1);
  });
});
