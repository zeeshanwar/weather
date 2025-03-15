import { createContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

function WeatherProvider({ children }) {

  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState("Delhi");
  const [nation, setNation] = useState("India");
  const [timezone, setTimeZone] = useState(null);
  const [weather, setWeather] = useState(null);
  const [LiveWeather, setLiveWeather] = useState(null);
  const [unit, setUnit] = useState(null);
  const [CurrentUnit, setCurrentUnit] = useState(null);
  const [HourlyUnit, setHourlyUnit] = useState(null);
  const [DailyUnit, setDailyUnit] = useState(null);
  const [storedLocations, setStoredLocations] = useState({}); // ✅ Keep track of searched locations

  async function FetchWeather() {

    setLoading(true);
    try {
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=1`
      );

      if (!geoRes.data.results) {
        throw new Error("City not found");
      }

      const { latitude, longitude, country } = geoRes.data.results[0];

      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weathercode,relative_humidity_2m,dewpoint_2m,precipitation,cloudcover,windspeed_10m,windgusts_10m,winddirection_10m,pressure_msl,uv_index,snowfall&hourly=temperature_2m,apparent_temperature,weathercode,windspeed_10m,windgusts_10m,winddirection_10m,precipitation,relative_humidity_2m,cloudcover,uv_index,visibility,snowfall,pressure_msl&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,snowfall_sum,weathercode,windspeed_10m_max,uv_index_max,sunrise,sunset&timezone=auto&forecast_days=15`
      );

      const WeatherData = weatherRes.data;

      // setNation(country);
      setWeather(WeatherData);
      setTimeZone(WeatherData.timezone);
      setCurrentUnit(WeatherData.current_units);
      setHourlyUnit(WeatherData.hourly_units);
      setDailyUnit(WeatherData.daily_units);

      // ✅ Store searched locations to prevent redundant API calls
      setStoredLocations((prevLocations) => ({
        ...prevLocations,
        [place]: { latitude, longitude, nation: country },
      }));
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchWeather();
  }, [place]); // ✅ Ensures weather updates when a new city is searched


  
  return (
    <WeatherContext.Provider
      value={{
        loading, setLoading,
        place, setPlace,
        nation, setNation,
        timezone, setTimeZone,
        weather, setWeather,
        LiveWeather, setLiveWeather,
        unit, setUnit,
        CurrentUnit, setCurrentUnit,
        HourlyUnit, setHourlyUnit,
        DailyUnit, setDailyUnit,
        storedLocations
      }}
    >
      {children}

    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;