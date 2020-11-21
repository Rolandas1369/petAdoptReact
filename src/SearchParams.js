import { ANIMALS } from "@frontendmasters/pet";
import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [bread, setBread] = useState("");
  const [breads, setBreads] = useState([]);

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
      <label htmlFor="bread">
        bread
        <select
          name=""
          id="bread"
          value={bread}
          onChange={(e) => setBread(e.target.value)}
          onBlur={(e) => setBread(e.target.value)}
          disabled={breads.length === 0}
        >
          <option>All</option>
          {breads.map((breadString) => (
            <option key={breadString} value={breadString}>
              {breadString}
            </option>
          ))}
        </select>
      </label>

      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
