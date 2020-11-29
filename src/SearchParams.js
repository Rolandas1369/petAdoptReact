import pet, { ANIMALS } from "@frontendmasters/pet";
import React, { useState, useEffect, useContext } from "react";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breads, setBreads] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breads); // setBreed from passed arg
  const [pets, setPets] = useState([]);
  // Theme Context can be anithing also const [theme, useTheme] can be used
  const [theme, setTheme] = useContext(ThemeContext);

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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartress</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
