import React, { useContext } from 'react'
import '../styles/components/Header.scss'
import Place from './Place'
import Search from './Search'
import Settings from './Settings'
import WeatherContext from '../Contexts/WeatherContext'


function Header () {
  return (
    <>
    <div className="Header">
      <Place />
      <Search />
      <Settings />
     </div> 
    </>
  )
}

export default Header;