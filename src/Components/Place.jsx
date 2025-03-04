import React, { useContext } from 'react'
import WeatherContext from '../Contexts/WeatherContext'

function Place() {
  
  const {place} = useContext(WeatherContext)
  const {nation} = useContext(WeatherContext)

  return (
    <div className='Place'>
      <i className="bi bi-geo-alt-fill"> </i>
      <b>{place}</b>, {nation}
    </div>
  )
}

export default Place
