import PokemonCard from './PokemonCard';
import ScoreBoard from './ScoreBoard';
import { getRandomPokemon } from '../services/pokeApi';
import { useEffect, useState } from 'react';
import '../styles/Gameboard.css';

function Gameboard() {
  const [pokemon, setPokemon] = useState([]);
  const [prevPicked, setPrevPicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    return parseInt(localStorage.getItem('bestScore')) || 0;
  });

  useEffect(() => {
    async function fetchPokemon() {
      const fetchedPokemon = await getRandomPokemon(8);
      setPokemon(fetchedPokemon);
    }

    fetchPokemon();
  }, []);

  function handleCardClick(id) {
    if (prevPicked.includes(id)) {
      setScore(0);
      setPrevPicked([]);
    } else {
      setPrevPicked((prev) => [...prev, id]);
      setScore((prev) => prev + 1);

      if (score + 1 > bestScore) {
        setBestScore(score + 1);
        localStorage.setItem('bestScore', score + 1);
      }
    }
  }

  return (
    <div className="container">
      <ScoreBoard score={score} best={bestScore} />
      <div className="gameboard">
        {pokemon.length > 0 ? (
          pokemon.map((poke) => (
            <PokemonCard
              key={poke.id}
              pokemon={poke}
              onClick={() => handleCardClick(poke.id)}
            />
          ))
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Gameboard;
