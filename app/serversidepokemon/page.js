import "../globals.css";
const ServerPokemonPage = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=3";
  const res = await fetch(url);
  const data = await res.json();

  const pokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

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

export default ServerPokemonPage;
