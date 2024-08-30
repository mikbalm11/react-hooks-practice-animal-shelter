import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet}) {
  const filteredPets = pets.map(pet => (<Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}></Pet>))
  return <div className="ui cards">{filteredPets}</div>;
}

export default PetBrowser;