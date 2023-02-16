import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import styles from './PokemonDetail.module.css'
import { IAllPokemonsOnDetails } from '../interfaces/AllPokemons';
import BarChart from '../components/BarChart';
import TypeTag from '../components/TypeTag';

const PokemonDetail = () => {
  const location = useLocation();
  const [pokemonData, setPokemonData] = useState<IAllPokemonsOnDetails | null>(null);
  const { id: params } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = location.state;
    setPokemonData(data);
  }, [location.state, params]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, id, url, height, weight, pokeAbilities, type, stats } = pokemonData.pokemon

  const heightToRender = (height / 10).toFixed(1);
  const weightToRender = (weight / 10).toFixed(1);
  const abilityToRender = pokeAbilities.map((ability: any, _index: number) => {
    const htmlToRender = (
      <p key={id}>{ability.ability.name}</p>
    )
    return htmlToRender;
  });

  return (
    <div className={styles.containerMain}>
      <header className={styles.containerHeader}>
        <div className={styles.containerData}>
          <h1>{name}</h1>
          <span className={styles.idOnDetails}>{"Nº" + id?.toString().padStart(4, '0')}</span>
        </div>
      </header>
      <button type="button" className={styles.homeButton} onClick={() => navigate('/')}>
        Home
        <i className="fa-solid fa-house" id={styles.faSolid} />
      </button>
      <section className={styles.containerSectionImage}>
        <img src={url} alt="pokemon_image" />
        <div className={styles.containerSectionData}>
          <div className={styles.containerAdmeasurement}>
            <span>{`Height ${heightToRender}m`}</span>
            <span>{`Weight ${weightToRender}kg`}</span>
          </div>
          <span>
            Abilities
            <span>{abilityToRender}</span>
          </span>
        </div>
      </section>
      <section className={styles.containerSectionInfos}>
        <BarChart
          width={500}
          height={400}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          stats={stats}
        />
        <div className={styles.typeContainerDetails}>
          <h1>Types</h1>
          <div className={styles.typeDetails}>
            {type.map((eachType, index) => {
              return (
                <TypeTag
                  key={`${index + 1}-${name}`}
                  id={Number(id)}
                  type={{ name: eachType.name }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div >
  );
};

export default PokemonDetail;