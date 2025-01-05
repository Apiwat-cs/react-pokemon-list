import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonShop.css";

function PokemonShop() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Featured Pokémon
  const limit = 20; // Number of Pokémon to load per request

  useEffect(() => {
    loadPokemon();
  }, [offset]);

  const loadPokemon = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const results = response.data.results;

      // Fetch details for each Pokémon
      const details = await Promise.all(
        results.map((pokemon) => axios.get(pokemon.url))
      );

      const sortedPokemon = details
        .map((detail) => detail.data)
        .sort((a, b) => a.id - b.id); // Ensure Pokémon are sorted by ID

      const uniquePokemon = sortedPokemon.filter(
        (newPokemon) =>
          !pokemonList.some((existing) => existing.id === newPokemon.id)
      );

      setPokemonList((prev) => [...prev, ...uniquePokemon]);

      // If the list is empty, set the first Pokémon as the featured Pokémon
      if (!pokemonList.length && uniquePokemon.length > 0) setCurrentIndex(0);

      setError("");
    } catch (err) {
      setError("Failed to load Pokémon. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const prevPoke = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1
    );
  };

  const nextPoke = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="shop-container">
      {error && <p className="error">{error}</p>}

      {pokemonList.length > 0 && (
        <div className="featured-pokemon">
          <h2 className="pokemon-name">
            {pokemonList[currentIndex]?.name}
          </h2>
          <div className="featured-content">
            <img
              src={
                pokemonList[currentIndex]?.sprites.other["official-artwork"]
                  .front_default
              }
              alt={pokemonList[currentIndex]?.name}
              className="featured-image"
            />
            <div className="pokemon-details">
              <h3>Stats</h3>
              <ul>
                {pokemonList[currentIndex]?.stats.map((stat, idx) => (
                  <li key={idx}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
              <h3>Abilities</h3>
              <ul>
                {pokemonList[currentIndex]?.abilities.map((ability, idx) => (
                  <li key={idx}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="button-container">
            <button onClick={prevPoke} className="nav-button">
              Previous
            </button>
            <button onClick={nextPoke} className="nav-button">
              Next
            </button>
          </div>
        </div>
      )}

      <div className="pokemon-grid">
        {pokemonList.map((poke) => (
          <div
            key={poke.id}
            className="pokemon-card"
            onClick={() =>
              setCurrentIndex(pokemonList.findIndex((p) => p.id === poke.id))
            }
          >
            <img
              src={poke.sprites.other["official-artwork"].front_default}
              alt={poke.name}
              className="pokemon-image"
            />
            <h2 className="pokemon-name">{poke.name}</h2>
          </div>
        ))}
      </div>

      {loading && <p className="loading">Loading...</p>}
      <button onClick={loadMore} className="load-more">
        Load More
      </button>
    </div>
  );
}

export default PokemonShop;
