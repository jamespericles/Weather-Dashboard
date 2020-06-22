function buildQueryURL() {
  // Grab text the user typed into the search input, add to the queryParams object
  let cityName = $("#citySearch").val().trim();
  // Set the API key
  const apiKey = "be562c81eeeb6bd00238f7dcfef3a8b0";

  // queryURL is the url we'll use to query the API

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

  // Logging the URL so we have access to it for troubleshooting

  $.get(apiURL, function (response) {
    console.log(response);
    console.log(response.name);
    console.log(response.main.temp);
    console.log(response.main.feels_like);
    console.log(response.main.humidity);
    console.log(response.wind.speed);

    // Append the city name to the document
    let nameOfCity = $("#nameOfCity");
    let currentCity = response.name;
    nameOfCity.text(currentCity);

    // Append the temperature of the city to the document
    let tempOfCity = $("#temperatureTD");
    let currentTemp = ((response.main.temp - 273.15) * 9) / 5 + 32;
    tempOfCity.text("Temperature: " + currentTemp.toPrecision(4));

    // Append the "feels_like" of the city to the document
    let feelOfCity = $("#feelsLikeTD");
    let currentFeel = ((response.main.feels_like - 273.15) * 9) / 5 + 32;
    feelOfCity.text("Feels Like: " + currentFeel.toPrecision(4));

    // Append the humidity of the city to the document
    let humidityOfCity = $("#humidityTD");
    let currentHumidity = response.main.humidity;
    humidityOfCity.text("Humidity: " + currentHumidity + "%");

    // Append the wind speed to the document
    let speedOfCity = $("#windSpeedTD");
    let currentSpeed = response.wind.speed;
    speedOfCity.text("Wind Speed: " + currentSpeed + " mph");
  });
}
