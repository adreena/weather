import axios from 'axios';

const API_KEY= '1b8b48362ffbf3ba0476e5636175fc59';
const ROOT_URI= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){
  const url = `${ROOT_URI}&q=${cityName},us`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request //action is a GET request
  };
}
