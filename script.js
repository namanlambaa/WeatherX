function toggleTheme() {
  var body = document.body;
  if (body.classList.contains("dark-theme")) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

function setDarkTheme() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}

function setLightTheme() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

function getWeather() {
  var city = document.getElementById("cityInput").value;
  var apiKey = "8cd94b4fa6fa47317e178cd552f4ca56";
  
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temperatureInfo = document.getElementById("temperatureInfo");
      var weatherDetails = `
        Temperature in ${data.name}: ${data.main.temp}°C
        \nChances of Rain: ${data.weather[0].description}
        \nPressure: ${data.main.pressure} hPa
        \nMin Temperature: ${data.main.temp_min}°C
        \nMax Temperature: ${data.main.temp_max}°C
      `;
      temperatureInfo.textContent = weatherDetails;
      var temperatureBox = document.getElementById("temperatureBox");
      temperatureBox.style.display = "block";
    })
    .catch(error => {
      console.log("Error fetching weather data:", error);
    });
}
