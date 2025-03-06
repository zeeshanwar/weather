import {React, useState} from 'react'
import './styles/components/App.scss';
import Weather from './Weather';

function App() {

   const [theme, setTheme] = useState("dark");

   return (
      <div className={`App-${theme}`}>
         <Weather />
      </div>
   )
}

export default App
