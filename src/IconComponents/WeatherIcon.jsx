import React from 'react';

function WeatherIcon({ icon, name, size, type, time, timezone }) {

  // console.log(time);
  

  // ✅ Convert API time to Date object in correct timezone
  const date = new Date(); // Append "Z" to ensure UTC parsing

  // console.log(date);
  

  const hours = date.toLocaleString("en-US", { 
    hour: "numeric", 
    hour12: false, 
    timeZone: timezone 
  });

  // ✅ Check if it's night based on API time instead of system time
  const isNight = hours >= 18 || hours < 6;

  let iconcode = icon;
  if (type == "Current") {
    if (isNight && (iconcode === 0 || iconcode === 2)) {
      iconcode += "_night";
    }
  }

  return (
    <img src={`/icons/animated/${iconcode}.svg`} alt={name} width={size} height={size} />
  );
}

export default WeatherIcon;
