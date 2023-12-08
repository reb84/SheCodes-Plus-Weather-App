function showCityResult(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let searchCityResult = document.querySelector("#current-city");
  searchCityResult.innerHTML = searchInput.value;
}

let searchCityForm = document.querySelector("#search-form");
searchCityForm.addEventListener("submit", showCityResult);

//// DATE + TIME ////

function formatDate(date) {
  let currentDay = date.getDay();
  let currentDate = date.getDate();
  let currentMonth = date.getMonth();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = [
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

  let formattedDay = days[currentDay];
  let formattedMonth = months[currentMonth];

  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  return `${formattedDay}  -   ${currentDate} ${formattedMonth}  -  ${currentHour}:${currentMinute}`;
}

let currentLocalDate = document.querySelector("#current-date");
let localDate = new Date();
currentLocalDate.innerHTML = formatDate(localDate);

////  ////
