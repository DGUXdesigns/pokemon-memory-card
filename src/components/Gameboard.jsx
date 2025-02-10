import PokemonCard from './PokemonCard';
import { getRandomPokemon } from '../services/pokeApi';
import { useEffect, useState } from 'react';
import '../styles/Gameboard.css';

function Gameboard() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const fetchedPokemon = await getRandomPokemon(8);
      setPokemon(fetchedPokemon);
    }

    fetchPokemon();
  }, []);

  return (
    <div className="gameboard">
      {pokemon.length > 0 ? (
        pokemon.map((poke) => <PokemonCard key={poke.id} pokemon={poke} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Gameboard;
