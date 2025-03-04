import React from 'react'

function ForecastIcon({ icon, name, size}) {
  return (
    <>
      <img src={`/src/icons/static/${icon}.png`} alt={`${name}`} width={size} height={size} />
    </>
  )
}
export default ForecastIcon
