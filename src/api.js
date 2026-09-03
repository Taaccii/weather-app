import { processWeatherData } from "./weatherData";

const API_KEY = 'RF4GR5UUBEWVJ8KJYCYHQHJLR';

export const getWeatherData = async (location) => {
  try {
    const response = await fetch (
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`Location not found (${response.status})`);
    }

    const rawData = await response.json();
    return processWeatherData(rawData);

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};