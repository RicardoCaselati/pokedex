import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../services/API';
import { IAllPokemons } from '../interfaces/AllPokemons';

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemonData, setPokemonData] = useState<IAllPokemons | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiReturn = await getPokemonById(Number(id));
      setPokemonData(apiReturn);
    };

    fetchData();
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <span>{"nº" + pokemonData.id?.toString().padStart(4, '0')}</span>
    </div>
  );
};

export default PokemonDetail;