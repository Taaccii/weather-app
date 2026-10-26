const locationElem = document.getElementById('location-name');
const tempElem = document.getElementById('current-temp');
const conditionElem = document.getElementById('weather-condition');
const feelsLikeElem = document.getElementById('feels-like');
const humidityElem = document.getElementById('humidity');
const windElem = document.getElementById('wind-speed');
const forecastContainer = document.getElementById('forecast-container');
const loadingElem = document.getElementById('loading');
const errorElem = document.getElementById('error-message');

const getIconUrl = (iconCode) => {
  return `https://cdn.statically.io/gh/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${iconCode}.svg`;
};

export const renderCurrentWeather = (data) => {
  locationElem.textContent = data.location;
  const dateObj = new Date(data.current.date || Date.now());
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  document.getElementById('current-date').textContent = dateObj.toLocaleDateString('en-US', options);
  tempElem.textContent = `${Math.round(data.current.temp)}°C`;
  conditionElem.textContent = data.current.conditions;
  feelsLikeElem.textContent = Math.round(data.current.feelsLike);
  humidityElem.textContent = Math.round(data.current.humidity);
  windElem.textContent = Math.round(data.current.windSpeed);

  const iconImg = document.getElementById('weather-icon-img');
  if (iconImg && data.current.icon) {
    iconImg.src = getIconUrl(data.current.icon);
    iconImg.alt = data.current.conditions;
  }
};

export const renderForecast = (dailyData) => {
  forecastContainer.textContent = '';

  dailyData.forEach((day) => {
    const card = document.createElement('div');
    card.classList.add('forecast-card');

    const dateElem = document.createElement('p');
    dateElem.classList.add('forecast-date');
    const dateObj = new Date(day.date);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    dateElem.textContent = dateObj.toLocaleDateString('en-US', options);

    const iconImg = document.createElement('img');
    iconImg.classList.add('forecast-icon');
    iconImg.src = getIconUrl(day.icon);
    iconImg.alt = day.conditions;

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
    card.append(dateElem, iconImg, conditionElem, tempContainer);
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

export const updateBackground = (icon) => {
  if (!icon) return;
  
  const iconName = icon.toLowerCase();
  document.body.dataset.weather = iconName;
};