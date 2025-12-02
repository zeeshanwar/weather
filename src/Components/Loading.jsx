import React from 'react'
import '../styles/components/Loading.scss';
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
         <p>Loading...</p>
      </div>
   )
}

export default Loading