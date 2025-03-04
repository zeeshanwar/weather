import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon ({ weatherCode }) {

   const getWeatherIcon = (weatherCode) => {
      const iconMapping = {
          0: "CLEAR_DAY", // Clear sky
          1: "CLEAR_DAY",
          2: "PARTLY_CLOUDY_DAY",
          3: "CLOUDY",
          45: "FOG",
          48: "FOG",
          51: "RAIN",
          53: "RAIN",
          55: "RAIN",
          61: "RAIN",
          63: "RAIN",
          65: "RAIN",
          66: "RAIN",
          67: "RAIN",
          71: "SNOW",
          73: "SNOW",
          75: "SNOW",
          80: "SHOWERS",
          81: "SHOWERS",
          82: "SHOWERS",
          85: "SNOW",
          86: "SNOW",
          95: "RAIN",
          96: "RAIN",
          99: "RAIN",
      };
  
      return iconMapping[weatherCode] || "CLEAR_DAY"; // Default to CLOUDY if unknown code
  };


    return (
        <ReactAnimatedWeather
            icon={getWeatherIcon(weatherCode)}
            color="goldenrod"
            size={50} // Adjust size as needed
            animate={true} // Enable animation
        />
    );
};
