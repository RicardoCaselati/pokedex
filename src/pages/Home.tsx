import React, { useState, useEffect, useMemo } from 'react';
import CardPokemon from '../components/CardPokemon';
import { IAllPokemons, IPokemon, IPokemonName, IType, IAbilitie, IStatOnHome } from '../interfaces/AllPokemons';
import styles from './Home.module.css';
import { getAllPokemons, getPokemonById } from '../services/API'

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<IAllPokemons[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonNamesResponse = await getAllPokemons();
        const pokemonNamesData = pokemonNamesResponse.results;
        const pokemonNamesList: IPokemon[] = pokemonNamesData.map((pokemon: IPokemonName, index: number) => {
          return { id: index + 1, name: pokemon.name };
        });

        const pokemonImages = await Promise.all(pokemonNamesList.map(async (pokemon: IPokemon) => {
          const pokemonDescribeData = await getPokemonById(Number(pokemon.id))
          const { sprites: { other: { dream_world } }, abilities, height, types, stats, weight } = pokemonDescribeData;
          const pokeTypes = types.map((typeObject: IType) => {
            return { name: typeObject.type.name };
          });

          const pokeAbilities = abilities.map((eachAbilities: IAbilitie) => {
            return { ability: { name: eachAbilities.ability.name, url: eachAbilities.ability.url } };
          })

          const pokeStats = stats.map((eachStat: IStatOnHome) => {
            const obj = {
              name: eachStat.stat.name,
              value: eachStat.base_stat,
            }
            return obj;
          })

          return {
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const memoizedPokemonList = useMemo(() => {
    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
    const storedPokemonList = localStorage.getItem('pokemonList');
    return storedPokemonList ? JSON.parse(storedPokemonList) : [];
  }, [pokemonList]);

  if (!memoizedPokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.containerHome}>
        {memoizedPokemonList.map((pokemon: IAllPokemons, index: number) => (
          <CardPokemon
            key={pokemon.id}
            pokeAbilities={pokemon.pokeAbilities}
            height={pokemon.height}
            id={pokemon.id}
            name={pokemon.name}
            stats={pokemon.stats}
            type={pokemon.type}
            url={pokemon.url}
            weight={pokemon.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;