import { useState, useEffect, useContext } from "react";
import WeatherContext from "../Contexts/WeatherContext";
import "../styles/components/LiveDateTime.scss";


function LiveDateTime() {
  const { timezone } = useContext(WeatherContext);
  const { place, nation } = useContext(WeatherContext);
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    if (!timezone) return;

    const updateTime = () => {
      const now = new Date();

      const localTime = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      const dayOfWeek = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        weekday: "long",
      }).format(now);

      const formattedDate = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(now);

      setDateTime({ localTime, dayOfWeek, formattedDate });
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timezone]);

  if (!dateTime) return null;

  return (
    <div className="live-datetime">
      <p className="city">{place}</p>
      <p className="country">{nation}</p>
      <p className="time">{dateTime.localTime}</p>
      <p className="date">
        {dateTime.dayOfWeek} <br /> {dateTime.formattedDate}
      </p>
      <p className="timezone">🌍 {timezone.replace("_", " ")}</p> 
    </div>
  );
}

export default LiveDateTime;
