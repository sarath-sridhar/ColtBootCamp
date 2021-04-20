const temperature = document.getElementById("Temperature");
const time = document.getElementById("Time");
const city = document.querySelector("#City");
const weather = document.querySelector("#Weather");

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "59dc7f9a0911d303196fe580e96758bb";
  var currentLatitude = "40.712776";
  var currentLongitude = "-74.005974";
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

  // setInterval(() => {
  //   sendRequest(weatherURL);
  // }, 300);
});

function sendRequest(weatherURL) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", weatherURL, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      jsonResponse = JSON.parse(this.responseText);
      setValuesinView(jsonResponse);
    }
  };
  xhttp.send();
}

function setValuesinView(jsonResponse) {
  temperature.innerHTML = jsonResponse.main.temp + " &#8451";
  city.innerHTML = jsonResponse.name;
  time.innerHTML = getDateandTimeFromUTCOffset(jsonResponse.timezone);
  console.log(jsonResponse.weather);
  weather.innerHTML = jsonResponse.weather[0].main;
}

function getDateandTimeFromUTCOffset(UTCSeconds) {
  // create Date object for current location
  d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  //nd = new Date(utc + (3600000*offset)); this is used if time offset is sent in hours
  nd = new Date(utc + 1000 * UTCSeconds);

  return nd.toLocaleString();

  //return d1.getHours().toString()+":"+d1.getMinutes().toString();
}

// Reference: https://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/
