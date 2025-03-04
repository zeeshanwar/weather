import React from 'react'

function WeatherIcon({ icon, name, size, type }) {

  let iconcode = icon;
  const isNight = new Date().getHours() >= 18 || new Date().getHours() < 6;

  if (type !== "Daily") {
    if (isNight && (iconcode === 0 || iconcode === 2)) {
      iconcode += "_night";
    }
  }

  return (
    <>
      <img src={`/src/icons/animated/${iconcode}.svg`} alt={name} width={size} height={size} />
    </>
  )
}
export default WeatherIcon
