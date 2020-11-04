var d = new Date();

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var month = monthNames[d.getUTCMonth()];
var day = d.getUTCDate() - 2;
var year = d.getUTCFullYear();

var currentDate = day + " " + month + "," + " " + year;

var date = document.querySelector(".date");
date.innerHTML = currentDate;
