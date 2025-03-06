import React from 'react'
import '../styles/components/Loading.scss';


function Loading() {

   return (
      <div className='loading-container'>
         <img
            src="/src/icons/weather.gif"
            width="350"
            height="350"
            alt="Loading"
            className=''
         />
      </div>
   )
}

export default Loading