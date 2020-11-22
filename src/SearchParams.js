import pet, { ANIMALS } from "@frontendmasters/pet";
import React, { useState, useEffect } from "react";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breads, setBreads] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breads); // setBreed from passed arg
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []); //if nothing returned set to []
  }

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown></AnimalDropdown>
        <BreedDropdown></BreedDropdown>
        <button type="Submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
