const locationElem = document.getElementById('location-name');
const tempElem = document.getElementById('current-temp');
const conditionElem = document.getElementById('weather-condition');
const feelsLikeElem = document.getElementById('feels-like');
const humidityElem = document.getElementById('humidity');
const windElem = document.getElementById('wind-speed');
const forecastContainer = document.getElementById('forecast-container');
const loadingElem = document.getElementById('loading');
const errorElem = document.getElementById('error-message');

export const renderCurrentWeather = (data) => {
  locationElem.textContent = data.location;
  tempElem.textContent = `${Math.round(data.current.temp)}°C`;
  conditionElem.textContent = data.current.conditions;
  feelsLikeElem.textContent = Math.round(data.current.feelsLike);
  humidityElem.textContent = Math.round(data.current.humidity);
  windElem.textContent = Math.round(data.current.windSpeed);
};

export const renderForecast = (dailyData) => {
  forecastContainer.textContent = '';

  dailyData.forEach((day) => {
    const card = document.createElement('div');
    card.classList.add('forecast-card');

    const dateElem = document.createElement('p');
    dateElem.classList.add('forecast-date');
    dateElem.textContent = day.date;

    const conditionElem = document.createElement('p');
    conditionElem.classList.add('forecast-condition');
    conditionElem.textContent = day.conditions;

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('forecast-temps');

    const maxTempElem = document.createElement('span');
    maxTempElem.classList.add('max');
    maxTempElem.textContent = `${Math.round(day.tempMax)}°C / `;

    const minTempElem = document.createElement('span');
    minTempElem.classList.add('min');
    minTempElem.textContent = `${Math.round(day.tempMin)}°C`;

    tempContainer.append(maxTempElem, minTempElem);
    card.append(dateElem, conditionElem, tempContainer);
    forecastContainer.append(card);
  });
};


export const toggleLoading = (isLoading) => {
  if (isLoading) {
    loadingElem.classList.remove('hidden');
  } else {
    loadingElem.classList.add('hidden');
  }
};

export const showError = (message) => {
  errorElem.textContent = message;
  errorElem.classList.remove('hidden');
};

export const clearError = () => {
  errorElem.textContent = '';
  errorElem.classList.add('hidden');
};