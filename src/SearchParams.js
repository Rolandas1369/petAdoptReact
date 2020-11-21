import React from "react";
import "./style.css";
const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location{" "}
          <input id="location" value={location} placeholder={location} />
        </label>
      </form>
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
