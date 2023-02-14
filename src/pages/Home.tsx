import React, { useState, useEffect } from 'react';
import CardPokemon from '../components/CardPokemon';
import { IAllPokemons, IType, IPokemon } from '../interfaces/AllPokemons';
import styles from './Home.module.css';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<IAllPokemons[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonNamesResponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const pokemonNamesData = await pokemonNamesResponse.json();
      const pokemonNamesList = pokemonNamesData.results.map((pokemon: any, index: number) => {
        return { id: index + 1, name: pokemon.name };
      });

      const pokemonImages = await Promise.all(pokemonNamesList.map(async (pokemon: IPokemon) => {
        const pokemonDescribeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        const pokemonDescribeData = await pokemonDescribeResponse.json();
        const { sprites: { other: { dream_world } }, types } = pokemonDescribeData;
        const pokeTypes = types.map((typeObject: IType) => {
          return { name: typeObject.type.name };
        });

        return { ...pokemon, url: dream_world.front_default, type: pokeTypes };
      }));

      setPokemonList(pokemonImages);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
  }, [pokemonList]);

  const storedPokemonList = localStorage.getItem('pokemonList');
  const parsedPokemonList = storedPokemonList ? JSON.parse(storedPokemonList) : [];

  return (
    <div className={styles.containerHome}>
      {parsedPokemonList.map((pokemon: IAllPokemons, index: number) => (
        <CardPokemon
          key={pokemon.id}
          id={pokemon.id}
          url={pokemon.url}
          name={pokemon.name}
          type={pokemon.type}
        />
      ))}
    </div>
  );
};

export default Home;
