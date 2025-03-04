import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import WeatherIcon from '../IconComponents/WeatherIcon';
// import WeatherIcon from './WeatherIconsAnimated';
import getWeatherSummary from '../functions/WeatherSummary';
import "../styles/components/CurrentWeather.scss";
import ForecastIcon from '../IconComponents/ForecastIcon';
import SunriseSunset from './SunriseSunset';
import WeatherContext from '../Contexts/WeatherContext';

function CurrentWeather({ 
     type,   title, 
     place, setPlace, 
     weather, setWeather, 
     LiveWeather, setLiveWeather, 
     unit, setUnit, 
     CurrentUnit, setCurrentUnit,
     loading, setLoading }) {

     // const [city, setCity] = useState("Delhi");
     // const [weather, setWeather] = useState(null);
     // const [unit, setUnit] = useState(null);
     // const [loading, setLoading] = useState(false);

     const getWindDirection = (degree) => {
          const directions = ["North", "NE", "East", "SE", "South", "SW", "West", "NW"];
          return directions[Math.round(degree / 45) % 8];
     };

     
     async function WeatherSet() {
          // setLoading(true);
          try {

               // setWeather(LiveWeather)               

               setLiveWeather({
                    temperature: weather.current.temperature_2m,
                    feelsLike: weather.current.apparent_temperature,
                    weatherCode: weather.current.weathercode,
                    humidity: weather.current.relative_humidity_2m,
                    precipitation: weather.current.precipitation,
                    windSpeed: weather.current.windspeed_10m,
                    windDirection: getWindDirection(weather.current.winddirection_10m), 
                    windGusts: weather.current.windgusts_10m,
                    pressure: weather.current.pressure_msl,
                    cloudCover: weather.current.cloudcover,
                    uvIndex: weather.current.uv_index,
                    dewPoint: weather.current.dewpoint_2m,
                    snowfall: weather.current.snowfall,
                    summary: getWeatherSummary(weather.current.weathercode)
               });
               // setLiveWeather({
               //      temperature: LiveWeather.temperature_2m,
               //      feelsLike: LiveWeather.apparent_temperature,
               //      weatherCode: LiveWeather.weathercode,
               //      humidity: LiveWeather.relative_humidity_2m,
               //      precipitation: LiveWeather.precipitation,
               //      windSpeed: LiveWeather.windspeed_10m,
               //      windDirection: getWindDirection(LiveWeather.winddirection_10m), 
               //      windGusts: LiveWeather.windgusts_10m,
               //      pressure: LiveWeather.pressure_msl,
               //      cloudCover: LiveWeather.cloudcover,
               //      uvIndex: LiveWeather.uv_index,
               //      dewPoint: LiveWeather.dewpoint_2m,
               //      snowfall: LiveWeather.snowfall,
               //      summary: getWeatherSummary(LiveWeather.weathercode)
               // });

               // // setUnit(UnitData);

               setCurrentUnit({
                    temperature: weather.current_units.temperature_2m,
                    feelsLike: weather.current_units.apparent_temperature,
                    weatherCode: weather.current_units.weathercode,
                    humidity: weather.current_units.relative_humidity_2m,
                    precipitation: weather.current_units.precipitation,
                    windSpeed: weather.current_units.windspeed_10m,
                    windDirection: weather.current_units.winddirection_10m,
                    windGusts: weather.current_units.windgusts_10m,
                    pressure: weather.current_units.pressure_msl,
                    cloudCover: weather.current_units.cloudcover,
                    uvIndex: weather.current_units.uv_index,
                    dewPoint: weather.current_units.dewpoint_2m,
                    snowfall: weather.current_units.snowfall
               });

          } catch (error) {
               console.error("Error fetching weather:", error);
               setWeather(null);
               // console.log("error in weatherset");
               
          } finally {
               // setLoading(false);
               // console.log("finally weatherset");
          }
     };

     useEffect(() => {
          WeatherSet();
     }, []);
     

     const otherInfoWidgets = LiveWeather && CurrentUnit ? [
          {
               id: 0, icon: 'precipitation', name: 'Precipitation', color: 'blue', code: 2,
               value: Math.round(LiveWeather.precipitation), unit: CurrentUnit.precipitation
          },
          {
               id: 1, icon: 'windy', name: 'Wind', color: 'green', code: 1,
               value: Math.round(LiveWeather.windSpeed), unit: CurrentUnit.windspeed_10m
          },
          {
               id: 2, icon: 'humidity', name: 'Humidity', color: 'cyan', code: 2,
               value: Math.round(LiveWeather.humidity), unit: CurrentUnit.relative_humidity_2m
          },
          {
               id: 3, icon: 'uv-index', name: 'UV index', color: 'yellow', code: 2,
               value: Math.round(LiveWeather.uvIndex), unit: CurrentUnit.uv_index
          },
          {
               id: 4, icon: 'cloudy', name: 'Cloud Cover', color: 'gray', code: 2,
               value: Math.round(LiveWeather.cloudCover), unit: CurrentUnit.cloudcover
          },
          {
               id: 5, icon: 'pressure', name: 'Pressure', color: 'gray', code: 2,
               value: Math.round(LiveWeather.pressure), unit: CurrentUnit.pressure_msl
          },
          {
               id: 6, icon: 'snowfall', name: 'Snowfall', color: 'gray', code: 2,
               value: Math.round(LiveWeather.snowfall), unit: CurrentUnit.snowfall,
          },
          {
               id: 7, icon: 'dewpoint', name: 'Dew Point', color: 'gray', code: 2,
               value: Math.round(LiveWeather.dewPoint), unit: CurrentUnit.dewpoint_2m,
          },
          {
               id: 8, icon: 'wind-compass', name: 'Wind Direction', color: 'purple', code: 2,
               value: LiveWeather.windDirection, unit: "" // Wind direction doesn't have a unit
          }
     ] : [];


     // if (weather){
     // console.log("Live Weather", LiveWeather);
     // console.log("Current Units", CurrentUnit);
     // }


     return (
          <div className='CurrentWeather'>
               {loading ? 
               (
                    <p>Loading...</p>
               ) : LiveWeather ? (
                    <>
                         <div className='temperature'>
                              <div className='weather-icon'>
                                   {LiveWeather.weatherCode !== undefined ? 
                                   (
                                        <WeatherIcon icon={LiveWeather.weatherCode} name="Weather Icon" size="100" type="Current" />
                                   ) : (
                                        <p>No icon available</p>
                                   )}
                              </div>
                              <div className='value'>
                                   <div className='real'>{LiveWeather.temperature}{CurrentUnit.temperature_2m}</div>
                                   <div className='feels_like'>feels like {LiveWeather.feelsLike}{CurrentUnit.apparent_temperature}</div>
                                   <div className='summary'>{LiveWeather.summary}</div>
                                   <div>{place}</div>
                              </div>
                         </div>

                         <SunriseSunset data={weather} />
                    </>

               ) : (
                    <p>Error fetching weather data.</p>
               )}

               <div className='other-infos'>

                    {otherInfoWidgets.map(({ id, value, unit, name, icon, color, code }) => (
                         <div className='widget' key={id}>
                              <div className='widget-container'>
                                   <div className='info'>
                                        <div className='icon'>
                                             <ForecastIcon icon={icon} name={name} size="30" />
                                        </div>
                                        <div className="value">
                                             {value} {unit}
                                        </div>
                                   </div>
                                   <div className='name'>{name}</div>
                              </div>
                         </div>

                    ))}

               </div>
          </div>
     )
}

export default CurrentWeather
