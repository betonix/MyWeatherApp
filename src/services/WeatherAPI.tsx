import axios from 'axios';

const API_KEY = 'b264629e2d3fa781cd9b3b4b1a578697';

export const getWeatherDataByCity = ({city}) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`,
  );
