import React from "react";
import { useState } from "react";
import Users from "./Users";
function SearchTile() {
  const [searchResult, setSearchResult] = useState([]);
  const handleClick = async (e) => {
    if (e.target.className === "blood-group-label") {
      let bloodGroupId = e.target.id;
      let bloodGroupClass = e.target.className;
      try {
        const response = await fetch(
          "http://localhost:5000/user/search-blood-group",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ bloodGroupId }),
          }
        );
        document
          .getElementsByClassName("blood-group-label")
          .classList?.remove("active");
        const bloodGroupClasses = [
          ...document.getElementsByClassName(bloodGroupClass),
        ];
        bloodGroupClasses.forEach((e) => e.classList.remove("active"));
        document.getElementById(bloodGroupId).classList.add("active");
        const data = await response.json();
        const newSearchData = [...data];
        setSearchResult(newSearchData);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="main-group-results">
      <div>
        <h4>Search by selecting the blood needed...</h4>
      </div>
      <div className="blood-group-search" onClick={handleClick}>
        <span id="A+" className="blood-group-label">
          A+
        </span>
        <span id="A-" className="blood-group-label">
          A-
        </span>
        <span id="B+" className="blood-group-label">
          B+
        </span>
        <span id="B-" className="blood-group-label">
          B-
        </span>
        <span id="AB+" className="blood-group-label">
          AB+
        </span>
        <span id="AB-" className="blood-group-label">
          AB-
        </span>
        <span id="O+" className="blood-group-label">
          O+
        </span>
        <span id="O-" className="blood-group-label">
          O-
        </span>
      </div>
      <div className="blood-group-results">
        {searchResult.map((result) => (
          <Users key={result._id} result={result} />
        ))}
      </div>
    </div>
  );
}
export default SearchTile;
