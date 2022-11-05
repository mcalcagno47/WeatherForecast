var cityInput = document.querySelector("#city-input");
var searchButton = document.querySelector("#btn");
var savedCity = document.querySelector("#saved-city")






























// function storeCities() {
//     var cities = [].concat(localStorage.getItem('searches'))
//     cities.push(cityInput.value);
//     localStorage.setItem('searches', cities)

//     var listItem = document.createElement('button');
//     listItem.textContent = cities;
//     document.getElementById('saved-city').append(listItem);

//     $('input[name="cities"]').val("");
// }

// // function renderCities(event) {
// //     event.preventDefault();

// //     let previousCities = localStorage.getItem("cities").split(",");

// //     if (previousCities !== null) {
// //         document.getElementById("saved-city").innerHTML = previousCities;
// //     } else {
// //         return;
// //     }

// // }

// searchButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     storeCities();
//     renderCities();
// });

// function init() {
//     var storedCities = JSON.parse(localStorage.getItem("cities"));

//     if (storedCities === null) {
//         cities = storedCities;
//     }

//     renderCities();
// }

// init();
// function renderCities() {
// }

// API
'api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&APPID=3a87513ddc7302050a84853267ee583c'

// lat and lon
'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + lat + '&lon=' + lon '&limit=5&appid=3a87513ddc7302050a84853267ee583c'

// City
'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput + '&limit=5&appid=3a87513ddc7302050a84853267ee583c'
