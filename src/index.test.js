import fetchMock from "jest-fetch-mock";
// import { addCityToList, loadFirst, onWeatherButtonClick, onCitiesChange } from "./func.js";
import { loadFirst } from "./func.js";

import * as getWeatherFT from "./getweath.js";

describe("page functions", () => {
  document.body.innerHTML = `<div>
    <input class="city" type="text" value="Минск" />
  </div>
  <div>
    <select class="cities-list">
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
  const listStorage = `<option>Воронеж</option>
      <option>Краснодар</option>
      <option>Москва</option>
      <option>Новосибирск</option>`;

  fetchMock.enableMocks();

  it("testing getWeather set data", async () => {
    // fetch.resetMocks();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            main: { temp: 25 },
            weather: [{ description: "cloudly" }],
            coord: { lat: "37.677751", lon: "55.757718" },
          }),
      })
    );
    await getWeatherFT.getWeather();
    expect(temperature.textContent).toEqual(`25°C`);
    expect(weatherDescription.textContent).toEqual(`cloudly`);
  });

  it("testing initial loader", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ city: "Казань" }),
      })
    );
    const mock = jest.spyOn(getWeatherFT, "getWeather");
    mock.mockImplementation(() => {});
    localStorage.list = listStorage;
    await loadFirst();
    expect(citiesList.innerHTML).toEqual(listStorage);
    expect(city.value).toEqual(`Казань`);
  });

  /* it("testing add existing city", () => {
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
  it("testing getWeather on button click", async () => {
    const mockGetWeather = jest.spyOn(getWeatherFT, "getWeather");
    mockGetWeather.mockImplementation(() => { });
    await onWeatherButtonClick();
    expect(mockGetWeather).toBeCalledTimes(1);
    expect(localStorage['list']).toEqual(citiesList.innerHTML);
  });
  it("testing getWeather on list change", async () => {
    const mockGetWeather = jest.spyOn(getWeatherFT, "getWeather");
    mockGetWeather.mockImplementation(() => { });
    citiesList.selectedIndex = 2;
    await onCitiesChange();
    expect(city.value).toEqual('Москва');
    expect(mockGetWeather).toBeCalledTimes(1);
  }); */
});
