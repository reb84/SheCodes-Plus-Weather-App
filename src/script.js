function searchCity(city) {
  let apiKey = "a7fd89897e18b9862b380a75d7eee1ed";
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let cityResult = document.querySelector("#current-city");
  cityResult.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}`;
}

function citySearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchCityForm = document.querySelector("#search-form");
searchCityForm.addEventListener("submit", citySearchSubmit);

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
