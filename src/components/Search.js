import "../sass/App.scss";
import React from "react";
import Users from "./Users";
import SearchTile from "./SearchTile";
import Nav from "./Nav";
import { useState } from "react";
function Search() {
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSearchCity(value);
  };
  const [searchResults, setSearchResults] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://blood-bank-node.onrender.com/user/search-city", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ searchCity }),
      });
      const data = await response.json();
      const newResult = [...searchResults, ...data];
      setSearchResults(newResult);
    } catch (err) {
      console.log(err);
    }
  };
  const [searchCity, setSearchCity] = useState("");
  return (
    <div className="blood-search-page">
      <Nav />
      <h3>This is the page to search the list of blood donars.</h3>
      <div className="blood-group-search-tile">
        <SearchTile />
      </div>
      <div className="search-page">
        <h4>Search by entering the city name...</h4>
        <form
          method="POST"
          className="search-form"
          id="search-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="searchCity">Enter the city : </label>
            <input
              name="searchCity"
              id="searchCity"
              type="text"
              onChange={handleInput}
              value={searchCity}
            />
          </div>
          <button>Search</button>
        </form>
        <div>
          {searchResults.map((result) => (
            <Users key={result._id} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Search;
