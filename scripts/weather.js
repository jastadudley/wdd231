const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=6404051c9637b5f7e8b81de32a6ca3f9";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());
    const data = await response.json();
    console.log(data);
    displayResults(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayResults(data) {
  document.querySelector("#current-temp").textContent = data.main.temp;
  
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;

  document.querySelector("#weather-icon").setAttribute("src", iconSrc);
  document.querySelector("#weather-icon").setAttribute("alt", desc);
  document.querySelector("#caption-desc").textContent = desc;
}

apiFetch();

/* Three day forcast*/
const forecastContainer = document.querySelector('.forecast-card');

async function fetchForecast() {
  const apiKey = '6404051c9637b5f7e8b81de32a6ca3f9';

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=Trier,de&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Forecast data 📦", data); 

    const forecastList = data.list;

    // Get one per day 
    const dailyForecasts = forecastList.filter(entry => entry.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyForecasts.forEach(forecast => {
      const date = new Date(forecast.dt_txt);
      const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

      const temp = Math.round(forecast.main.temp);
      const icon = forecast.weather[0].icon;
      const desc = forecast.weather[0].description;

      const card = document.createElement('div');
      card.innerHTML = `
        <h4>${weekday}</h4>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}" title="${desc}">
        <p>${temp}°F</p>
      `;

      forecastContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Forecast load error:", error);
  }
}

fetchForecast();
