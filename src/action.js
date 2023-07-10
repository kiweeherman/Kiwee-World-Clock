// This section will be soley for making the other world clocks work (i.e. New York, Tokyo, and London)
//New York
let newYorkDate = document.getElementById("new-york-date");
let newYorkTime = document.getElementById("new-york-time");
function newYorkCurrentDate() {
  newYorkDate.innerHTML = moment()
    .tz("America / New_York")
    .format("MMMM Do, YYYY");
}
setTimeout(newYorkCurrentDate, 1);
setInterval(newYorkCurrentDate, 60000);

// Time in New York
function newYorkCurrentTime() {
  newYorkTime.innerHTML = moment().tz("America/New York").format("LTS");
}
setTimeout(newYorkCurrentTime, 1);
setInterval(newYorkCurrentTime, 1000);

// Tokyo
let tokyoDate = document.getElementById("tokyo-date");
let tokyoTime = document.getElementById("tokyo-time");
function tokyoCurrentDate() {
  tokyoDate.innerHTML = moment().tz("Asia / Tokyo").format("MMMM Do, YYYY");
}
setTimeout(tokyoCurrentDate, 1);
setInterval(tokyoCurrentDate, 60000);

// Time in Tokyo
function tokyoCurrentTime() {
  tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("LTS");
}
setTimeout(tokyoCurrentTime, 1);
setInterval(tokyoCurrentTime, 1000);

//London
let londonDate = document.getElementById("london-date");
let londonTime = document.getElementById("london-time");
function londonCurrentDate() {
  londonDate.innerHTML = moment().tz("Europe / London").format("MMMM Do, YYYY");
}
setTimeout(londonCurrentDate, 1);
setInterval(londonCurrentDate, 60000);

// London Time
function londonCurrentTime() {
  londonTime.innerHTML = moment().tz("Europe/London").format("LTS");
}
setTimeout(londonCurrentTime, 1);
setInterval(londonCurrentTime, 1000);
