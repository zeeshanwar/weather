import {React , useContext} from 'react'
import '../styles/components/Search.scss'
import WeatherContext from '../Contexts/WeatherContext'


function Search() {

  const {setPlace} = useContext(WeatherContext)
  
  return (
     <>
    <div className='Search'>
      <div className='search-container'>
        <div className='search-icon'>
          <i className='bi bi-search'></i>
        </div>
        <div className='search-input'>
          <input
            type='text'
            name='search-city'
            placeholder='Search city ...'
            // onKeyDown={(e) => setPlace(e.target.value)}
            // onChange={(e) => console.log(e.target.value)}
          />
        </div>
        </div>
    </div>
    </>
  )
}

export default Search
