export async function getAllPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching pokemon list: ${error}`);
    throw error;
  }
}

export async function getPokemonById(id: number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching pokemon with id ${id}: ${error}`);
    throw error;
  }
}
