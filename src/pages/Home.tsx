import React, { useState, useEffect } from 'react';
import CardPokemon from '../components/CardPokemon';
import styles from './Home.module.css'

const Home = () => {
  const [pokemonListName, setPokemonListName] = useState<any[]>([]);
  const [pokemonListImage, setPokemonListImage] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemonName = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      const listName = data.results;

      const objectName = listName.map((pokemon: any, index: number) => {
        const objName = { id: index + 1, name: pokemon.name }
        return objName;
      })

      setPokemonListName(objectName);
    };

    const fetchPokemonImg = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      const pokemons = data.results;

      const img = await Promise.all(pokemons.map(async (_pokemon: any, index: any) => {
        const eachPokemonDescribe = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
        const eachPokemonDescribeResult = await eachPokemonDescribe.json();
        const { sprites: { other: { dream_world } } } = eachPokemonDescribeResult;
        return dream_world
      }));

      const imgObj = img.map((eachUrl, index) => {
        const obj = { id: index + 1, url: eachUrl.front_default }
        return obj;
      })

      setPokemonListImage(imgObj);
    };

    fetchPokemonName();
    fetchPokemonImg()
  }, []);

  const pokemonCardToRender = pokemonListName.map((pokemon) => {
    const image = pokemonListImage.find((image) => image.id === pokemon.id);
    return image ? { ...pokemon, url: image.url } : pokemon;
  });

  return (
    <div className={ styles.container }>
      {pokemonCardToRender.map((eachPokemon) => (
        <CardPokemon
          id={eachPokemon.id}
          url={eachPokemon.url}
          name={eachPokemon.name}
        />
      ))}
    </div>
  );
};

export default Home;
