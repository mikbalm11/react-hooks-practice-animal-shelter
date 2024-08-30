import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    const URL = filters.type;
    if (URL !== "all") {
    fetch(`http://localhost:3001/pets?type=${filters.type}` )
     .then((response) => response.json())
     .then((data) => setPets(data))
    } else {
      fetch("http://localhost:3001/pets")
       .then((response) => response.json())
       .then((data) => setPets(data))
    }
  }, [filters]);

  function handleChangeType(event) {
    setFilters({...filters, type: event.target.value });
  };

  function handleFindPetsClick() {
    setFilters({...filters, type: filters.type });
  };

  function handleAdoptPet(petId) {
    const updatedPets = pets.map((pet) => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    });
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 