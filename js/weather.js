const API_KEY = "8e57dd672a491f7c91a39372a922f7bb";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const temperature = Math.round(parseFloat(data.main.temp) * 10) / 10;
            weather.innerText = `${data.weather[0].main} / ${temperature}°C`;
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            // const tempIcon = document.createElement("img");
            // tempIcon.src = `https://openweathermap.com/img/w/${data.weather[0].icon}.png`;
            // const weatherIcon = document.querySelector("#weather").append(tempIcon);
    });
    
    
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);