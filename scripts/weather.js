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
