import React from "react";
import { mockPokemonData } from "../mock/pokeData";
import "./PokeCard.css";

const PokeCardSprite = ({ src, label }) => {
  return (
    <div>
      <img src={src} alt={label} />
      <div>{label}</div>
    </div>
  );
};

const PokeCard = ({ pokeData = mockPokemonData }) => {
  const { name, sprites, video } = pokeData;
  const { front_default, front_shiny } = sprites;
  return (
    <div class={"pokeCard"}>
      <div class={"pokeCardHeader"}>
        <div>{name}</div>
        <a href={video} target={"_blank"} rel={"noopener noreferrer"}>
          Pokédex entry
        </a>
      </div>
      <div class={"pokeCardContent"}>
        <PokeCardSprite src={front_default} label={"Default sprite"} />
        <PokeCardSprite src={front_shiny} label={"Shiny sprite"} />
      </div>
    </div>
  );
};

export default PokeCard;
