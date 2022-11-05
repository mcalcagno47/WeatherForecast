const app = {
    init: () => {
        document
            .querySelector('#search-btn')
            .addEventListener('click', app.fetchWeather);
    },

    // (ev) is the event of clicking the search button
    fetchWeather: (ev) => {
        var lat = document.getElementById('latitude').value;
        var lon = document.getElementById('longitude').value;
        var key = '99c3f0b955fb6ab95dfe2df6ef3c94ea';
        var lang = 'en';
        var units = 'imperial';
        var url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

        fetch(url)
            .then((data) => {
                app.showWeather(data);
            })
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
        console.log(resp);
        let row = document.querySelector('.weather.row');
        //resp.daily is the 5 day forecast, see line 44 with idx <= 5.
        row.innerHTML = resp.daily
            .map((day, idx) => {
                if (idx <= 5) {
                    let dt = new Date(day.dt * 1000);
                    return `<div class="col">
                                <div class="card">
                                <h5 class="card-title p-2">${dt.toDateString()}</h5>
                                    <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" class="card-img-top" alt="${day.weather[0].description}"/>
                                    <div class="card-body">
                                        <h3 class="card-title">${day.weather[0].main}</h3>
                                        <p class="card-text">Temperature ${day.temp.day}&deg;</p>
                                        <p class="card-text">Humidity ${day.humidity}%</p>
                                        <p class="card-text">Wind ${day.wind_speed}ft/s;</p>
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