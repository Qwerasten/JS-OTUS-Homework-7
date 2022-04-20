import {
  getWeather,
  addCityToList,
  addOnContentLoader,
  addWeatherButtonClick,
  addOnListChange,
} from "./func.js";



import fetchMock from "jest-fetch-mock";
import { functions } from "lodash";


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
  const weatherButton = document.querySelector(".weather-button");
  const citiesList = document.querySelector(".cities-list");
  const mapSurface = document.querySelector(".mapSurface");
  let latitude = "0";
  let longitude = "0";

  fetchMock.enableMocks();
  beforeEach(() => {
    fetch.resetMocks();
  });
  /*
    it("testing getWeather set data", async () => {
      fetch.mockResponseOnce(JSON.stringify({
        main: { temp: 25 },
        weather: [{ description: 'cloudly' }],
        coord: { lat: "37.677751", lon: "55.757718" }
      }));
      const res = await getWeather();
      expect(temperature.textContent).toEqual(`25°C`);
      expect(weatherDescription.textContent).toEqual(`cloudly`);
      expect(latitude).toEqual("37.677751");
      expect(longitude).toBeCloseTo("55.757718");
    });
  */
  it("testing initial loader", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ city: "Казань" }),
      })
    );
    addOnContentLoader();

    jest.mock('./func.js', () => ({
      ...jest.requireActual('./func.js'),
      getWeather: () => Promise.resolve(1)
    }));


    document.dispatchEvent(new Event("DOMContentLoaded"));
    expect(city.value).toEqual(`Казань`);
  });


  /*addOnContentLoader();
  addWeatherButtonClick();
  addOnListChange();

  jest.spyOn(window, "fetch").mockImplementationOnce(() => "");

  it("testing initial loading", () => {
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });*/

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
