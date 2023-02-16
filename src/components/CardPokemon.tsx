import { useNavigate } from 'react-router-dom';
import { IAllPokemons } from '../interfaces/AllPokemons';
import styles from './CardPokemon.module.css'
import TypeTag from './TypeTag';

const CardPokemon = ({
  pokeAbilities = [],
  height,
  id,
  name,
  stats,
  type,
  url,
  weight,
}: IAllPokemons) => {

  const mapTypesToRender = (id: number | any) => {
    return type.map((eachObject) => ({
      id,
      type: eachObject,
    }))
  }
  const toRender = mapTypesToRender(id)
  const navigate = useNavigate();
  const heightToRender = (height / 10).toFixed(1);
  const weightToRender = (weight / 10).toFixed(1);
  const abilitiesToRender = pokeAbilities.map((ability: any) => {
    const htmlToRender = (
      <p>{ability.abilityName}</p>
    )
    return htmlToRender;
  });

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const id = event.currentTarget.value;

    const pokemonData: IAllPokemons = {
      pokeAbilities,
      height,
      id,
      name,
      stats,
      type,
      url,
      weight,
    }

    navigate(`/${id}`, { state: { pokemon: pokemonData } });
  };


  return (
    <div className={styles.container} key={id}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <img className={styles.img} src={url} alt="pokemon_image" />
          <p className={styles.id}>{"Nº" + id?.toString().padStart(4, '0')}</p>
          <p className={styles.name}>{name}</p>
          <div className={styles.typeContainer}>
            {toRender.map((eachType, index) => {
              return (
                <TypeTag
                  key={`${index + 1}-${name}`}
                  id={eachType.id}
                  type={eachType.type}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.mainContainer}>
            <h5>{name}</h5>
            <span className={styles.id}>{"Nº" + id?.toString().padStart(4, '0')}</span>
          </div>
          <span>{`height: ${heightToRender}m`}</span>
          <span>{`weight: ${weightToRender}kg`}</span>
          <button
            value={id}
            className={styles.btn}
            type="button"
            onClick={handleClick}
          >
            Get Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;
