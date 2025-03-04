
export default function getWeatherSummary(code) {

   const weatherDescriptions = {
      0: "Clear Sky ☀️",
      1: "Partially Clear 🌤️",
      2: "Partly Cloudy ⛅",
      3: "Overcast ☁️",
      45: "Fog 🌫️",
      48: "Depositing Rime Fog 🌫️",
      51: "Light Drizzle 🌦️",
      53: "Moderate Drizzle 🌦️",
      55: "Dense Drizzle 🌦️",
      56: "Freezing Drizzle ❄️",
      57: "Freezing Dense Drizzle ❄️",
      61: "Slight Rain 🌧️",
      63: "Moderate Rain 🌧️",
      65: "Heavy Rain 🌧️",
      66: "Freezing Rain ❄️",
      67: "Freezing Heavy Rain ❄️",
      71: "Slight Snowfall ❄️",
      73: "Moderate Snowfall ❄️",
      75: "Heavy Snowfall ❄️",
      77: "Snow Grains ❄️",
      80: "Light Showers 🌦️",
      81: "Moderate Showers 🌦️",
      82: "Heavy Showers 🌧️",
      85: "Light Snow Showers ❄️",
      86: "Heavy Snow Showers ❄️",
      95: "Thunderstorm ⛈️",
      96: "Thunderstorm with Hail ⛈️",
      99: "Severe Thunderstorm with Hail ⛈️",
   };
   return weatherDescriptions[code] || "Unknown Weather 🤔";
};
