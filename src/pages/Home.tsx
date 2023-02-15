import React, { useState, useEffect } from 'react';
import CardPokemon from '../components/CardPokemon';
import { IAllPokemons, IType, IAbilitie, IStat, IPokemon, IPokemonName } from '../interfaces/AllPokemons';
import styles from './Home.module.css';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<IAllPokemons[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonNamesResponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (pokemonNamesResponse.ok) {
          const pokemonNamesData = await pokemonNamesResponse.json();
          const pokemonNamesList = pokemonNamesData.results.map((pokemon: IPokemonName, index: number) => {
            return { id: index + 1, name: pokemon.name };
          });
          const pokemonImages = await Promise.all(pokemonNamesList.map(async (pokemon: IPokemon) => {
            const pokemonDescribeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
            const pokemonDescribeData = await pokemonDescribeResponse.json();
            const { sprites: { other: { dream_world } }, abilities, height, types, stats, weight } = pokemonDescribeData;
            const pokeTypes = types.map((typeObject: IType) => {
              return { name: typeObject.type.name };
            });

            const pokeAbilities = abilities.map((eachAbilities: IAbilitie) => {
              return { abilityName: eachAbilities.ability.name };
            })

            const pokeStats = stats.map((eachStat: IStat) => eachStat.stat.name)

            return {
              ...pokemon,
              id: pokemon.id,
              name: pokemon.name,
              key: pokemon.id,
              height,
              pokeAbilities,
              stats: pokeStats,
              type: pokeTypes,
              url: dream_world.front_default,
              weight,
            };
          }));

          setPokemonList(pokemonImages);
        } else console.log('any pokemons ar founded')
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
  }, [pokemonList]);

  const storedPokemonList = localStorage.getItem('pokemonList');
  const parsedPokemonList = storedPokemonList ? JSON.parse(storedPokemonList) : [];


  return (
    <div className={styles.containerHome}>
      {parsedPokemonList.map((pokemon: IAllPokemons) => (
        <CardPokemon
          pokeAbilities={pokemon.pokeAbilities}
          height={pokemon.height}
          id={pokemon.id}
          key={pokemon.key}
          name={pokemon.name}
          stats={pokemon.stats}
          type={pokemon.type}
          url={pokemon.url}
          weight={pokemon.weight}
        />
      ))}
    </div>
  );
};

export default Home;
