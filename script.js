const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status === 404) { // Use triple equals for comparison
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%"; // Use data.main.humidity
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "assets/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "assets/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "assets/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "assets/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "assets/mist.png";
      } else {
      
      }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
