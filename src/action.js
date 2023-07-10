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

// Date Auto Updates
function currentDate() {
  londonDate.innerHTML = moment().tz("Europe / London").format("MMMM Do, YYYY");
  newYorkDate.innerHTML = moment().tz("EST5EDT").format("MMMM Do, YYYY");
  tokyoDate.innerHTML = moment().tz("Asia / Tokyo").format("MMMM Do, YYYY");
  currentCityDate.innerHTML = moment().tz("EST5EDT").format("MMMM Do, YYYY");
}
setTimeout(currentDate, 1);
setInterval(currentDate, 60000);

// Time Auto updates
function currentTime() {
  newYorkTime.innerHTML = moment().tz("EST5EDT").format("LTS");
  tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("LTS");
  londonTime.innerHTML = moment().tz("Europe/London").format("LTS");
  currentCityTime.innerHTML = moment().tz("EST5EDT").format("LTS");
}
setTimeout(currentTime, 1);
setInterval(currentTime, 1000);

// Now for the selected timezone

selector = document.getElementById("city-select");

function changeFirst(data) {
  if (data.target.value === "Blank") {
    alert("Please select a city!");
  } else if (data.target.value === "CurrentLocation") {
  } else {
    currentCityDate.innerHTML = moment()
      .tz(data.target.value)
      .format("MMMM Do, YYYY");
    currentCityTime.innerHTML = moment().tz(data.target.value).format("LTS");
    currentCityName.innerHTML = data.target.value;
  }
}

selector.addEventListener("change", changeFirst);
