import React from "react";
import Pokedex from "../components/Pokedex";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const PokedexVue = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [seeMore, setSeeMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(seeMore);
    const data = await res.json();

    setSeeMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    // console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <Nav />
      {allPokemons.map((pokemon, index) => (
        <Pokedex
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          type={pokemon.types[0].type.name}
          key={index}
        />
      ))}
      <button className="see-more" onClick={() => getAllPokemons()}>
        Load More
      </button>
    </div>
  );
};

export default PokedexVue;
