import './style.css';
import { getWeatherData } from './api.js';
import { processWeatherData } from './weatherData.js';
import {
  renderCurrentWeather,
  renderForecast,
  toggleLoading,
  showError,
  clearError,
  updateBackground
} from './domController.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const handleSearch = async (location) => {
  clearError();
  toggleLoading(true);

  try {
    const rawData = await getWeatherData(location);
    const cleanData = processWeatherData(rawData);
    updateBackground(cleanData.current.icon);
    renderCurrentWeather(cleanData);
    renderForecast(cleanData.daily);
  } catch (err) {
    showError(err.message || 'Unable to retrieve weather data.');
  } finally {
    toggleLoading(false);
  }
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (query) {
    handleSearch(query);
    searchInput.value = '';
  } else {
    showError('Enter the name of a valid city.')
  }
});

handleSearch('Roma, Italy');