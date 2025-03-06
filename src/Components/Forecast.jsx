import React from 'react'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import HorizontalScroll from './HorizontalScroll'
import '../styles/components/HorizontalScroll.scss';

function Forecast({ type, title, weather, unit }) {


  return (
    <div className='Forecast'>
      <div className="forecast-container">

        <h3>{title}</h3>

        <HorizontalScroll>

          <div className="widget-container">

            {weather ? (
              type === "hourly" ?
                (
                  <HourlyForecast name={title} data={weather} units={unit} />
                ) : (
                  <DailyForecast name={title} data={weather} units={unit} />
                )
            ) : (
              <p>Error fetching data</p>
            )}

          </div>

        </HorizontalScroll>

      </div>

    </div>
  )
}

export default Forecast