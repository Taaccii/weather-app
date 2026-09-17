import { processWeatherData } from "./weatherData";

const API_KEY = 'RF4GR5UUBEWVJ8KJYCYHQHJLR';

export const getWeatherData = async (location) => {
  try {
    const response = await fetch (
      // In api.js
`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}` ,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`Location not found (${response.status})`);
    }

    return await response.json();

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};