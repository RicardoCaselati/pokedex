import React, { useState, useEffect } from 'react';

const Home = () => {
  const [pokemonListName, setPokemonListName] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemonName = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      console.log(data.results);

      setPokemonListName(data.results);
    };

    // const fetchPokemonImg = async () => {
    //   const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    //   const data = await response.json();
    //   console.log(data.results);

    //   setPokemonListName(data.results);
    // };


    fetchPokemonName();
    // fetchPokemonImg()
  }, []);

  return (
    <ul>
      {pokemonListName.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default Home;