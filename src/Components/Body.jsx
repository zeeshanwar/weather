import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../styles/components/Body.scss';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import WeatherContext from '../Contexts/WeatherContext';

function Body() {

  // const [loading, setLoading] = useState(false);
  // const [city, setCity] = useState("Delhi");
  // const [weatherData, setWeatherData] = useState(null);

  const {loading, setLoading} = useContext(WeatherContext);
  const {weather, setWeather} = useContext(WeatherContext);
  const {LiveWeather, setLiveWeather} = useContext(WeatherContext);
  const {place, setPlace} = useContext(WeatherContext);
  const {unit, setUnit} = useContext(WeatherContext);
  const {CurrentUnit, setCurrentUnit} = useContext(WeatherContext);
  const {HourlyUnit, setHourlyUnit} = useContext(WeatherContext);
  const {DailyUnit, setDailyUnit} = useContext(WeatherContext);

  // console.log("Weather in Body", weather);
  // console.log(CurrentUnit);
  
  // if(!loading) {console.log(weather.hourly);}
  
  
  // async function FetchWeather() {
  //   setLoading(true);
  //   try {
  //     const geoRes = await axios.get(
  //       `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  //     );

  //     if (!geoRes.data.results) {
  //       throw new Error("City not found");
  //     }

  //     const { latitude, longitude } = geoRes.data.results[0];

  //     // Get weather data
  //     const weatherRes = await axios.get(
  //       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weathercode,relative_humidity_2m,dewpoint_2m,precipitation,cloudcover,windspeed_10m,windgusts_10m,winddirection_10m,pressure_msl,uv_index,snowfall&hourly=temperature_2m,apparent_temperature,weathercode,windspeed_10m,windgusts_10m,winddirection_10m,precipitation,relative_humidity_2m,cloudcover,uv_index,visibility,snowfall,pressure_msl&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,snowfall_sum,weathercode,windspeed_10m_max,uv_index_max,sunrise,sunset&timezone=auto&forecast_days=15`);

  //     console.log("Weather Object:", weatherRes);

  //     setWeather(weatherRes.data);

  //   } catch (error) {
  //     console.error("Error fetching weather:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   FetchWeather();
  // }, []);


  return (
    <div className='Body'>
      {loading ? (
        <img
          src="/src/icons/weather.gif"
          width="500"
          height="500"
          alt="Loading"
          className='loading-container'
        />
      ) : weather ? (
        <>
          <CurrentWeather
            type="current"
            title="Current Weather"
            place={place}
            setPlace={setPlace}
            weather={weather}
            setWeather={setWeather}
            LiveWeather={LiveWeather}
            setLiveWeather={setLiveWeather}
            unit={unit}
            setUnit={setUnit}
            CurrentUnit={CurrentUnit}
            setCurrentUnit={setCurrentUnit}
            loading={loading}
            setLoading={setLoading}
          />
          <Forecast
            type="hourly"
            title="48 HOUR FORECAST"
            weather={weather.hourly}
            unit={HourlyUnit}
          />
          <Forecast
            type="daily"
            title="15 DAYS FORECAST"
            weather={weather.daily}
            unit={DailyUnit}
          />
        </>
      ) : (
        <p>Error fetching weather data.</p>
      )}
    </div>
  );
}

export default Body;