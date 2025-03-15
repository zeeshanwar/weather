import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../styles/components/Body.scss';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import WeatherContext from '../Contexts/WeatherContext';
import Loading from './Loading';

function Body() {

  const {loading, setLoading} = useContext(WeatherContext);
  const {weather, setWeather} = useContext(WeatherContext);
  const {timezone, setTimeZone} = useContext(WeatherContext);
  const {LiveWeather, setLiveWeather} = useContext(WeatherContext);
  const {place, setPlace} = useContext(WeatherContext);
  const {unit, setUnit} = useContext(WeatherContext);
  const {CurrentUnit, setCurrentUnit} = useContext(WeatherContext);
  const {HourlyUnit, setHourlyUnit} = useContext(WeatherContext);
  const {DailyUnit, setDailyUnit} = useContext(WeatherContext);


  return (
    <div className='Body'>

      {loading ? (

        <Loading />
        
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
            timezone={timezone}
            unit={HourlyUnit}
          />
          <Forecast
            type="daily"
            title="15 DAYS FORECAST"
            weather={weather.daily}
            timezone={timezone}
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