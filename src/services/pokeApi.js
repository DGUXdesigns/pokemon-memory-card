export async function getRandomPokemon(count) {
  const uniqueIds = new Set();

  while (uniqueIds.size < count) {
    const randomId = Math.floor(Math.random() * 151) + 1;
    uniqueIds.add(randomId);
  }

  const pokemonArray = [];

  try {
    const pokemonPromises = [...uniqueIds].map(getPokemonDetails);
    const results = await Promise.all(pokemonPromises);

    results.forEach((data) => {
      pokemonArray.push({
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
      });
    });

    return pokemonArray;
  } catch (error) {
    console.error('Error fetching pokemon:', error);
  }
}

async function getPokemonDetails(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
}
