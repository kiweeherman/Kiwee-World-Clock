// This section will be soley for making the other world clocks work (i.e. New York, Tokyo, and London)
//New York Setup
let newYorkDate = document.getElementById("new-york-date");
let newYorkTime = document.getElementById("new-york-time");

// Tokyo Setup
let tokyoDate = document.getElementById("tokyo-date");
let tokyoTime = document.getElementById("tokyo-time");

//London Setup
let londonDate = document.getElementById("london-date");
let londonTime = document.getElementById("london-time");

// Lets deafult the first city to Hanover, PA for funzies
let currentCityName = document.getElementById("current-city-name");
let currentCityDate = document.getElementById("current-city-date");
let currentCityTime = document.getElementById("current-city-time");

let timeZoneGuess = "EST5EDT";

// Date Auto Updates
function currentDate() {
  londonDate.innerHTML = moment().tz("Europe / London").format("MMMM Do, YYYY");
  newYorkDate.innerHTML = moment().tz("EST5EDT").format("MMMM Do, YYYY");
  tokyoDate.innerHTML = moment().tz("Asia / Tokyo").format("MMMM Do, YYYY");
  currentCityDate.innerHTML = moment()
    .tz(timeZoneGuess)
    .format("MMMM Do, YYYY");
}
setTimeout(currentDate, 2);
setInterval(currentDate, 60000);

// Time Auto updates
function currentTime() {
  newYorkTime.innerHTML = moment().tz("EST5EDT").format("LTS");
  tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("LTS");
  londonTime.innerHTML = moment().tz("Europe/London").format("LTS");
  currentCityTime.innerHTML = moment().tz(timeZoneGuess).format("LTS");
}
setTimeout(currentTime, 2);
setInterval(currentTime, 1000);

// Now for the selected timezone

selector = document.getElementById("city-select");

function changeFirst(data) {
  let newName = data.target.value;
  if (data.target.value.includes("/") === true) {
    newName = data.target.value.replace("_", " ").split("/")[1];
  } else {
    newName = data.target.value;
  }
  if (data.target.value === "Blank") {
    alert("Please select a city!");
  } else if (data.target.value === "Your Location") {
    timeZoneGuess = moment.tz.guess();
    currentCityDate.innerHTML = moment()
      .tz(timeZoneGuess)
      .format("MMMM Do, YYYY");
    currentCityTime.innerHTML = moment().tz(timeZoneGuess).format("LTS");
    currentCityName.innerHTML = `${newName}<br>(${timeZoneGuess})`;
  } else {
    timeZoneGuess = data.target.value;
    currentCityDate.innerHTML = moment()
      .tz(timeZoneGuess)
      .format("MMMM Do, YYYY");
    currentCityTime.innerHTML = moment().tz(timeZoneGuess).format("LTS");
    currentCityName.innerHTML = newName;
  }
}

selector.addEventListener("change", changeFirst);
