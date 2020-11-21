import { ANIMALS } from "@frontendmasters/pet";
import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </form>
      <label htmlFor="animal">Animal</label>
      <select
        name=""
        value={animal}
        id="animal"
        onChange={(e) => setAnimal(e.target.value)}
        onBlur={(e) => setAnimal(e.target.value)}
      >
        <option>All</option>
        {ANIMALS.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>

      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
