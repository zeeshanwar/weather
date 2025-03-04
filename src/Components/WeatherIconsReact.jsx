import { WiDaySunny, WiCloud, WiDayCloudy, WiCloudy, WiFog, WiRain, WiSnow, WiThunderstorm, WiShowers, WiRainWind, WiSnowWind 
} from "react-icons/wi";

export const getWeatherIcon = (code) => {
   const icons = {
       0: <WiDaySunny />, 
       1: <WiDaySunny />, 
       2: <WiDayCloudy />, 
       3: <WiCloudy />, 
       45: <WiFog />,
       48: <WiFog />,
       51: <WiShowers />,
       53: <WiShowers />,
       55: <WiShowers />,
       61: <WiRain />,
       63: <WiRain />,
       65: <WiRainWind />,
       71: <WiSnow />,
       73: <WiSnow />,
       75: <WiSnowWind />,
       80: <WiShowers />,
       81: <WiShowers />,
       82: <WiRainWind />,
       95: <WiThunderstorm />,
       96: <WiThunderstorm />,
       99: <WiThunderstorm />,
   };
   return icons[code] || <WiCloud />; // Default to cloudy if code not found
};
