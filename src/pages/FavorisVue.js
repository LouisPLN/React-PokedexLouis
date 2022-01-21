import React from "react";
import Pokedex from "../components/Pokedex";
import Nav from "../components/Nav";
import "../styles/pokedex/pokedex.scss";
import "../styles/pokedex/favoris.scss";

const FavorisVue = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <img className="logo" src="/logo/Logo.svg" alt="logo" />
        <div className="list-poke">
          {(JSON.parse(localStorage.getItem("favorites")) || []).map(
            (pokemon, index) => (
              <Pokedex
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                type={pokemon.type}
                height={pokemon.height}
                weight={pokemon.weight}
                attack={pokemon.moves}
                stats={pokemon.stats}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FavorisVue;