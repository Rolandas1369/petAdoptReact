import pet, { ANIMALS } from "@frontendmasters/pet";
import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breads, setBreads] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breads); // setBreed from passed arg

  useEffect(() => {
    setBreads([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: ApiBreads }) => {
      const breedSting = ApiBreads.map(({ name }) => name);
      setBreads(breedSting);
    });
  }, [animal, setBreads, setBreed]); // dependencies on what effect updates

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
