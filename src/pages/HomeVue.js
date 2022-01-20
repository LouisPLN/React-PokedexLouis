import React from "react";
import Nav from "../components/Nav";
import "../styles/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="hero-body">
        <div className="hero-col">
          <div className="hero-title">
            <h1>
              <b>Trouve</b> tous tes <b>Pokémons</b> favoris
            </h1>
            <p className="hero-desc">
              Vous pouvez désormais connaître le type des Pokémons, leurs
              forces, faiblesses ainsi que leurs capacitées.
            </p>
            <Link to="/Pokedex">
              <button>Voir le Pokédex</button>
            </Link>
            <p className="hero-dev">
              Projet réalisé par
              <a href="https://www.linkedin.com/in/louis-poulin/">
                Louis Poulin
              </a>
              pour le cours de React d'ASI-DEV2{" "}
              <img src="/logo/Pokeball2.svg" alt="Pokéball" />
            </p>
          </div>
          <div className="hero-image">
            <a href="https://github.com/LouisPLN">
              Suis moi sur GitHub <img src="/logo/GitHub.png" />
            </a>
          </div>
        </div>
        <img
          className="hero-banner"
          src="/logo/BannerComplete.svg"
          alt="hero banner"
        />
      </div>
    </div>
  );
};

export default Home;