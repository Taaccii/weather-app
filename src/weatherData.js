export const processWeatherData = (rawData) => {
  return {
    location: rawData.resolvedAddress,
    current: {
      temp: rawData.currentConditions.temp,
      feelsLike: rawData.currentConditions.feelslike,
      humidity: rawData.currentConditions.humidity,
      windSpeed: rawData.currentConditions.windspeed,
      conditions: rawData.currentConditions.conditions,
      icon: rawData.currentConditions.icon,
    },

    daily: rawData.days.slice(0, 7).map((day) => ({
      date: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      conditions: day.conditions,
      icon: day.icon,
    })),
  };
};