import React from 'react';
import '../styles/components/Forecast.scss';
import WeatherIcon from '../IconComponents/WeatherIcon';
import ForecastIcon from '../IconComponents/ForecastIcon';

function DailyForecast({ name, data, units, timezone }) {

  const { time, temperature_2m_max, temperature_2m_min, precipitation_sum, snowfall_sum, windspeed_10m_max, uv_index_max, sunrise, sunset, weathercode } = data;

  // Process daily forecast data
  const formattedForecast = time.map((date, index) => {
    const dateObject = new Date(date);

    // Format date as DD-MM-YYYY
    const formattedDate = dateObject.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Extract sunrise and sunset time
    const sunriseTime = new Date(sunrise[index]).toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const sunsetTime = new Date(sunset[index]).toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return {
      id: index,
      date: formattedDate,
      maxTemp: Math.ceil(temperature_2m_max[index]),
      minTemp: Math.floor(temperature_2m_min[index]),
      precipitation: precipitation_sum[index],
      snowfall: snowfall_sum[index],
      windSpeed: Math.round(windspeed_10m_max[index]),
      uvIndex: Math.round(uv_index_max[index]),
      sunrise: sunriseTime,
      sunset: sunsetTime,
      weatherCode: weathercode[index]
    };
  });

  return (
    <div className='forecast-box'>
      {formattedForecast.map((forecast) => (
        <div key={forecast.id} className='forecast-widget'>
          <div className="day">{forecast.date}</div>
          <div className="icon-temp">
            
              {/* <WeatherIcon
                // key={index}
                icon={forecast.weatherCode}
                name={forecast.id}
                size="65"
                type="Daily"
                time={forecast.time}  // ✅ API daily time
                timezone={timezone}  // ✅ API timezone
              /> */}

            <WeatherIcon icon={forecast.weatherCode} name={forecast.id} size="65" type="Daily"/>
            
          </div>
          <div className="temperature">{forecast.maxTemp}°C / {forecast.minTemp}°C</div>

          <div className='sunrise-sunset'>
            <hr className='hr-bar' />
            <div className='icon-info'> 🌅 {forecast.sunrise}</div>
            {/* <hr className='hr-bar' /> */}
            <div className='icon-info'> 🌇 {forecast.sunset}</div>
            <hr className='hr-bar' />
          </div>

          <div className="details">
            <div className='icon-info'><ForecastIcon icon="windy" name="windy" size="25" /> {forecast.windSpeed} {units.windspeed_10m_max}</div>
            <div className='icon-info'><ForecastIcon icon="uv-index" name="uv" size="25" /> {forecast.uvIndex}</div>
            <div className='icon-info'><ForecastIcon icon="precipitation" name="rain" size="25" /> {forecast.precipitation} mm</div>
            {/* <div className='icon-info'><ForecastIcon icon="snowfall" name="snow" size="25" /> {forecast.snowfall} mm</div> */}
          </div>

        </div>
      ))}
    </div>
  );
}

export default DailyForecast;
