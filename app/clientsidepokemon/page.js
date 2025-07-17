"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3");
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemonList(pokemonDetails);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);


  if (loading) return <div className="loading">Loading Pokémon...</div>;

  return (
    <div className="pokemon-container">
      <h1>Pokémon Gallery</h1>
      <div className="pokemon-cards">
        {pokemonList.map((poke) => (
          <div className="pokemon-card" key={poke.id}>
            <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
            <img
              src={poke.sprites.front_default}
              alt={poke.name}
              width="120"
              height="120"
            />
            <div className="pokemon-info">
              <p>
                <span>Height:</span> {poke.height}
              </p>
              <p>
                <span>Weight:</span> {poke.weight}
              </p>
              <p>
                <span>Base XP:</span> {poke.base_experience}
              </p>
              <div className="types">
                {poke.types.map((t) => (
                  <span
                    key={t.type.name}
                    className={`type-badge ${t.type.name}`}
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;
