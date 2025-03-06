import React from 'react'
import '../styles/components/Forecast.scss';
import WeatherIcon from '../IconComponents/WeatherIcon';
import ForecastIcon from '../IconComponents/ForecastIcon';

function HourlyForecast({ name, data, units }) {

   const { time, temperature_2m, visibility, windspeed_10m, relative_humidity_2m, pressure_msl, cloudcover, precipitation, weathercode } = data;
   
   // console.log(data);
   

   const HourNow = new Date().getHours();
   const CurrentHour = data.time.findIndex(time => new Date(time).getHours() >= HourNow);
   const CustomDataTime = data.time.slice(CurrentHour, CurrentHour + 48);

   // Process time and date outside the return statement
   const formattedForecast = CustomDataTime.map((time, index) => {
      const dateObject = new Date(time); // Convert API time to Date object

      // Format time in 12-hour format with AM/PM
      const formattedTime = dateObject.toLocaleTimeString("en-GB", {
         hour: "numeric",
         minute: "numeric",
         hour12: true,
      });

      // Format date as MM-DD-YYYY
      const formattedDate = dateObject.toLocaleDateString("en-GB", {
         year: "numeric",
         month: "2-digit",
         day: "2-digit",
      });

      return {
         id: index,
         date: formattedDate,
         time: formattedTime,
         temperature: temperature_2m[index],
         windSpeed: windspeed_10m[index],
         humidity: relative_humidity_2m[index],
         visibility: (visibility[index] / 1000).toFixed(1),
         pressure: pressure_msl[index],
         cloudCover: cloudcover[index],
         precipitation: precipitation[index],
         WeatherCode: weathercode[index]
      };
   });


   return (

      <div className='forecast-box'>
         {formattedForecast.map((forecast) => (
            <div key={forecast.id} className='forecast-widget'>
               <div className="day">
                  {forecast.date}
               </div>
               <div className="time">
                  {forecast.time}
               </div>
               <div className="icon-temp">
                  <WeatherIcon icon={forecast.WeatherCode} name={forecast.id} size="65" type="Hourly"/>
               </div>
                  <div className="temperature">{forecast.temperature}{units.temperature_2m}</div>
               <div className="details">
                  <div className='icon-info'><ForecastIcon icon="windy" name="windy" size="25" /> {forecast.windSpeed} {units.windspeed_10m}</div>
                  <div className='icon-info'><ForecastIcon icon="humidity" name="windy" size="25" /> {forecast.humidity} {units.relative_humidity_2m}</div>
                  <div className='icon-info'><ForecastIcon icon="cloudy" name="windy" size="25" /> {forecast.cloudCover} {units.cloudcover}</div>
                  <div className='icon-info'><ForecastIcon icon="visibility" name="visibility" size="25" /> {forecast.visibility} k{units.visibility}</div>
                  {/* <p>Precipitation: {forecast.precipitation} mm</p> */}
               </div>
            </div>
         ))}
      </div>

   );
}

export default HourlyForecast
