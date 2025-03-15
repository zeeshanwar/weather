import {React, useContext, useState} from 'react'
import './styles/components/App.scss';
import Weather from './Weather';
import ThemeContext from './Contexts/ThemeContext';

function App() {

   const [theme, setTheme] = useState("dark");
   const [dark, setDark] = useState("dark");
   // const { dark } = useContext(ThemeContext);

   return (
      <div className={`App-${dark ? 'dark' : 'light'}`}>
         <Weather />
      </div>
   )
}

export default App
