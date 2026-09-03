import './style.css';
import { getWeatherData } from './api.js';

getWeatherData('Rome')
  .then((data) => {
    console.log('Weather Data Received:', data);
  })
  .catch((err) =>{
    console.error('Test Failed', err);
  }); 