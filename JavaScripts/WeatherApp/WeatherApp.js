const temperature = document.getElementById("Temperature");
const unit = document.getElementById("Unit");
const time = document.getElementById("Time");

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "59dc7f9a0911d303196fe580e96758bb";
  var currentLatitude = "11.002579";
  var currentLongitude = "76.968121";
  var units = "metric";

  var weatherURL =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    currentLatitude +
    "&lon=" +
    currentLongitude +
    "&units=" +
    units +
    "&appid=" +
    apiKey;

  sendRequest(weatherURL);
});

function sendRequest(weatherURL) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", weatherURL, true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      jsonResponse = JSON.parse(this.responseText);
      setValuesinView(jsonResponse);
    }
  };
}

function setValuesinView(jsonResponse) {
  temperature.innerHTML = jsonResponse.main.temp;
}
