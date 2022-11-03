var cityInput = document.querySelector("#city-input");
var searchButton = document.querySelector("#btn");
var savedCity = document.querySelector("#saved-city")


function storeCities() {
    var cities = cityInput.value.trim();
    localStorage.setItem("cities", JSON.stringify(cities));
}

function renderCities() {
    var previousCities = JSON.parse(localStorage.getItem("cities"));

    if (previousCities !== null) {
        document.getElementById("saved-city").innerHTML = previousCities;
    } else {
        return;
    }

    savedCity.textContent = previousCities;
}

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    storeCities();
    renderCities();
});

function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    if (storedCities !== null) {
        cities = storedCities;
    }

    renderCities();
}

init();

