const API_KEY = "bdaeedace61b01c83c1d1dd4d03becb5";

let savingGeoPosition = {};

function onGeoOk(position) {
  console.log(position);

  savingGeoPosition = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  console.log(savingGeoPosition);
  console.log(typeof savingGeoPosition.lat);

  localStorage.setItem("GEO_KEY", JSON.stringify(savingGeoPosition));

  getWeather();
}

function getWeather() {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${savingGeoPosition.lat}&lon=${savingGeoPosition.lon}&appid=${API_KEY}&units=metric`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.sys.country, data.weather[0].main, data.main.temp);
      const countrySpan = document.querySelector(".country");
      const weatherSpan = document.querySelector(".weather");
      const tempSpan = document.querySelector(".temp");

      countrySpan.innerText = data.sys.country;
      weatherSpan.innerText = data.weather[0].main;
      tempSpan.innerText = data.main.temp + "℃";
    });
}

function onGeoError() {
  alert("Can't Find your GPS");
}

const savedGeoPosition = localStorage.getItem("GEO_KEY");

if (savedGeoPosition === null) {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else {
  savingGeoPosition = JSON.parse(savedGeoPosition);
  getWeather();
}
