import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonDisplay.css";

const PokemonDisplay = () => {
  const [pokemon, setPokemon] = useState({ name: "", image: "" });
  const [id, setId] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        const pokemonData = {
          name: response.data.name,
          image:
            response.data.sprites?.other["official-artwork"]?.front_default ||
            "",
        };

        setPokemon(pokemonData);
        setError(null);
      } catch (error) {
        setError("Error fetching Pokémon. Please try again later.");
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();

    const interval = setInterval(() => {
      setId((prevId) => (prevId < 151 ? prevId + 1 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div className="display-container">
      <div className="hero">
        <h1>PokemonList Website</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          ratione veritatis maxime esse velit aliquam fugiat expedita non
          doloribus sapiente.
        </p>
        <div className="buttons">
          <button
            className="pokedex"
            onClick={() => (window.location.href = "/shop")}
          >
            Pokedex
          </button>
          <button className="hrsdfordev">hrsdfordev</button>
        </div>
        <p className="developer-text">Developer By Array (hrsdfordev)</p>
      </div>
      <div className="pokemon-display">
        {error && <p className="error">{error}</p>}
        {pokemon.image ? (
          <img src={pokemon.image} alt={pokemon.name} />
        ) : (
          <p>No image available</p>
        )}
        <h1 className="pokemon-name">{pokemon.name}</h1>
      </div>
    </div>
  );
};

export default PokemonDisplay;
