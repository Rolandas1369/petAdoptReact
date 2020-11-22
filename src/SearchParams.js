import { ANIMALS } from "@frontendmasters/pet";
import React, { useState } from "react";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breads, setBreads] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breads);

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
      <AnimalDropdown></AnimalDropdown>
      <BreedDropdown></BreedDropdown>
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
