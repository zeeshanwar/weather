import React from 'react'
import '../styles/components/Loading.scss';
import '../styles/components/Blink.scss';
import WeatherContext from '../Contexts/WeatherContext';


function Loading() {

   return (
      <div className='loading-container'>
         <img
            src="/icons/weather.gif"
            width="350"
            height="350"
            alt="Loading"
            className=''
         />
         <p className='blink'>Loading...</p>
      </div>
   )
}

export default Loading