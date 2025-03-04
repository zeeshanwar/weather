import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Weather from './Weather.jsx'
import { WeatherProvider } from './Contexts/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  </StrictMode>,
)
