const savedCities = document.querySelector("saved-cities");
const cityInput = document.querySelector("#city-input").value;
const searchBtn = document.querySelector("#search-btn");

var previousCitiesList = [];

const app = {
    init: () => {
        document
            .querySelector('#search-btn')
            .addEventListener('click', app.fetchWeather);
    },

    // append latitude and longitude with city.coord.lat and city.coord.lon
    // let cityInput = document.getElementById('city-input').value;

    // set local storage for cities
    // get local storage for cities, turn to buttons


    fetchWeather: (ev) => {
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let key = '99c3f0b955fb6ab95dfe2df6ef3c94ea';
        let lang = 'en';
        let units = 'imperial';
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => app.showWeather(data));
        var element = document.getElementById("current-weather");
        element.classList.remove("hide");
    },

    getLocation: (ev) => {
        navigator.geolocation.getCurrentPosition(app.success, app.error);
    },

    success: (position) => {
        document.getElementById('latitude').value =
            position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value =
            position.coords.longitude.toFixed(2);
    },

    error: (error) => {
        console.error(error);
    },

    showWeather: (resp) => {
        let row = document.querySelector('.weather.row');

        let filteredList = resp.list.filter(function (v, index) { return [0, 8, 16, 24, 30, 39].includes(index) })

        row.innerHTML = filteredList
            .map((day, idx) => {
                if (idx <= 5) {
                    let dt = new Date(day.dt * 1000);
                    return `<div class="col">
                                <div class="card">
                                <h5 class="card-title p-2">${dt.toDateString()}</h5>
                                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" class="card-img-top" alt="${day.weather[0].description}"/>
                                    <div class="card-body">
                                        <h3 class="card-title">${day.weather[0].main}</h3>
                                        <p class="card-text">Temperature ${day.main.temp}&deg;</p>
                                        <p class="card-text">Humidity ${day.main.humidity}%</p>
                                        <p class="card-text">Wind ${day.wind.speed}ft/s;</p>
                                    </div>
                                </div>
                                </div>
                            </div>`;
                }
            })
            .join('');
    }
}

app.init();
