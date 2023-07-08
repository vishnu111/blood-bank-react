import "../sass/App.scss";
import React from "react";
import Users from "./Users";
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
      const response = await fetch("http://localhost:5000/user/search-city", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ searchCity }),
      });
      const data = await response.json();
      console.log(data);
      const newResult = [...searchResults, ...data];
      setSearchResults(newResult);
      console.log(searchResults);
    } catch (err) {
      console.log(err);
    }

    // await fetch("http://localhost:5000/user/search-city", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify({ searchCity }),
    // })
    //   .then((result) => {
    //     return result.json();
    //     // setSearchResults(result.json());
    //     // console.log(searchResults);
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     // const newSearch = [...searchResults, data];
    //     // setSearchResults(newSearch);
    //     setSearchResults((searchResults) => [...searchResults, data]);
    //     console.log(searchResults);
    //   })
    //   .catch((err) => console.log(err));
  };
  const [searchCity, setSearchCity] = useState("");
  return (
    <div className="search-page">
      <h3>This is the page to search the list of blood donars.</h3>
      <form
        method="POST"
        className="search-form"
        id="search-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="searchCity">Enter the city</label>
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
  );
}
export default Search;
