import React, {useEffect, useState} from 'react';
import {
  Container,
  DescriptionText,
  Icon,
  IconContainer,
  TemperatureText,
  CaptionText,
} from './Home.styles';

import Geolocation from '@react-native-community/geolocation';
import Button from '../../components/Button/Button';

import Geocoder from 'react-native-geocoding';

import {getWeatherDataByCity} from '../../services/WeatherAPI';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [dataTemperature, setDataTemperature] = useState({});

  useEffect(() => {
    Geocoder.init('AIzaSyANs1bMy1KWql8M4TM2W6W-9rqizupJjX8', {
      language: 'pt-BR',
    });
    getCoords();
  }, []);

  const getCoords = async () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      position => {
        getAddress(position.coords);
      },
      error => console.log('error', error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const getAddress = async ({latitude, longitude}) => {
    const json = await Geocoder.from(latitude, longitude);

    setCountryName(getCountryName(json?.results[0].address_components));
    setCityName(getCityName(json?.results[0].address_components));

    const {data} = await getWeatherDataByCity({
      city: getCityName(json?.results[0].address_components),
    });

    setDataTemperature({
      temp: data.main.temp.toFixed(),
      maxTemp: data.main.temp_max.toFixed(),
      minTemp: data.main.temp_min.toFixed(),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    });
    setLoading(false);
  };

  const getCityName = address => {
    const [city] = address.filter(item =>
      item.types.includes('administrative_area_level_2'),
    );
    return city.long_name;
  };

  const getCountryName = address => {
    const [country] = address.filter(item => item.types.includes('country'));
    return country.long_name;
  };

  return (
    <Container>
      {loading ? (
        <CaptionText testID="loading-label">Carregando...</CaptionText>
      ) : (
        <>
          <IconContainer>
            <Icon
              source={{
                uri: `https://openweathermap.org/img/wn/${dataTemperature.icon}@2x.png`,
              }}
            />
          </IconContainer>
          <CaptionText>{`${dataTemperature.description}`}</CaptionText>
          <CaptionText>{`-----------------------`}</CaptionText>
          <TemperatureText>{`${dataTemperature.temp}`}ºC</TemperatureText>
          <CaptionText>{`min: ${dataTemperature.minTemp}ºC  /  max: ${dataTemperature.maxTemp}ºC`}</CaptionText>
          <DescriptionText>{`${cityName}, ${countryName}`}</DescriptionText>
          <Button title={'Atualizar'} onPress={() => getCoords()} />
        </>
      )}
    </Container>
  );
};

export default Home;
