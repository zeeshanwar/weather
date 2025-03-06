import { useContext, useState, useCallback } from "react";
import WeatherContext from "../Contexts/WeatherContext";
import axios from "axios";
import "../styles/components/Search.scss";

function Search() {
  const { setPlace, storedLocations, setNation } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  // ✅ Debounce function to optimize API calls
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // ✅ Fetch city suggestions (from API + stored locations)
  const onSearch = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setSearchResults([]);
        setOpenSearchResults(false);
        return;
      }

      // ✅ Filter stored locations first
      let results = storedLocations
        ? Object.entries(storedLocations)
          .map(([name, data]) => ({ name, ...data }))
          .filter((place) =>
            place.name.toLowerCase().includes(query.toLowerCase())
          )
        : [];

      // ✅ If no stored results, fetch from API
      if (results.length === 0) {
        try {
          const geoRes = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5`
          );

          if (geoRes.data.results) {
            results = geoRes.data.results.map((place) => ({
              name: place.name,
              nation: place.country,
            }));
          }
        } catch (error) {
          console.error("Error fetching city suggestions:", error);
        }
      }

      setSearchResults(results);
      setOpenSearchResults(results.length > 0);
    }, 300), // 300ms debounce delay
    [storedLocations]
  );

  console.log("Search Results:", searchResults);

  // ✅ Handle input change and trigger search
  const handleInputChange = (e) => {
    setText(e.target.value);
    onSearch(e.target.value);
  };

  // ✅ Select city from search results
  const changePlace = (place) => {
    setPlace(place.name);
    setNation(place.nation || ""); // Update country if available
    setText("");
    setOpenSearchResults(false);
  };

  // ✅ Allow changing city on "Enter" key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text.trim()) {
      changePlace({ name: text });
    }
  };

  return (
    <div className="search">
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Search city ..."
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress} // ✅ Handles "Enter" key
          />
        </div>
        {openSearchResults && (
          <div className="search-results">
            <div className="results-container">

              {searchResults.length > 0 && (
                searchResults.map((place, index) => (
                  <div
                    className="result"
                    key={`${place.name}-${place.country}-${place.latitude}-${place.longitude}`}
                    onClick={() => changePlace(place)}
                  >
                    {place.name}, {place.nation || ""}
                  </div>
                )))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;