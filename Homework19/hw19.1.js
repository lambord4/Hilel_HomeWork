const appid = `81b7484af2cf3817281487b6500731fa`;
const lat = `46.482952`;
const lon = `30.712481`;

document.querySelector('button').addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        const temp = data.main.temp;
        const city = data.name;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const feelsLike = data.main.feels_like;


  
        const parent = document.querySelector('main');
        parent.innerHTML = `<h2>${city}</h2>
        <p>Температура: ${temp}°C</p>
        <p>Давление: ${pressure} hPa</p>
        <p>Влажность: ${humidity}%</p>
        <p>Ветер: ${wind} km/h</p>
        <p>Чувствуется Как: ${feelsLike} °C</p>`;
      })

});