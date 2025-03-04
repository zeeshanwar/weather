import React from "react";
import "../styles/components/SunriseSunset.scss";

const SunriseSunset = ({ data }) => {

   // Extract sunrise and sunset from API response
   const sunrise = new Date(data.daily.sunrise[0]).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Convert to 12-hour format
   });

   const sunset = new Date(data.daily.sunset[0]).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Convert to 12-hour format
   });

   return (
      <div className="sun-container">
         
         <div className="sun-box">
            <h2>Sunrise</h2>
            <img src={`/src/icons/static/sunrise-animated.gif`} alt="Sunrise" className="sun-icon" />
            <div className="sun-time">{sunrise}</div>
         </div>

         <hr className="hr-bar" />
         
         <div className="sun-box">
            <h2>Sunset</h2>
         <img src={`/src/icons/static/sunset-animated.gif`} alt="Sunset" className="sun-icon" />
            <div className="sun-time">{sunset}</div>
         </div>
      </div>
   );
};

export default SunriseSunset;
