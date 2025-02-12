import '../styles/PokemonCard.css';

function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img className="poke-img" src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;
