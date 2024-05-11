function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API'; // Replace with your own API key from weatherapi.com
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p>${data.current.condition.text}</p>
    <p>Temperature: ${data.current.temp_c} °C</p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Wind Speed: ${data.current.wind_kph} km/h</p>
    `;
    })
    .catch(error => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        alert('An error occurred while fetching the weather data. Please check the entered city name and try again.');
      });
  }