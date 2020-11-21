import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location{" "}
          <input
            id="location"
            value={location}
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </form>
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
