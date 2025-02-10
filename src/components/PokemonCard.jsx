import '../styles/PokemonCard.css';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img className="poke-img" src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;
