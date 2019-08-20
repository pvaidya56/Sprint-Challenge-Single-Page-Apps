import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(data => {
      console.log('Results', data.data) // Returns an array of characters
      setCharacters(data.data.results);
    })

     .catch(err => {
      console.log('Error', err)
    })
  }, []);

  return (
    <section className="character-list grid-view ui segment active tab">
    {characters.map(character => {
      return <CharacterCard character={character} key={character.id}/>
    })}
    </section>
  );
}
