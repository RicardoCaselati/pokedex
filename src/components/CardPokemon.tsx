import { useNavigate } from 'react-router-dom';
import { IAllPokemons, ITarget } from '../interfaces/AllPokemons';
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

  const heightToRender = (height / 10).toFixed(1);
  const weightToRender = (weight / 10).toFixed(1);
  const abilitiesToRender = pokeAbilities.map((ability: any) => {
    const htmlToRender = (
      <p>{ability.abilityName}</p>
    )
    return htmlToRender;
  });

  const navigate = useNavigate();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const pokeList: IAllPokemons[] = JSON.parse(localStorage.getItem('pokemonList') || '[]');
    const id = event.currentTarget.value;

    if (pokeList) {
      const findedPokemon = pokeList.find((eachPokemon) => eachPokemon.id === Number(id))
      const pokemon = await findedPokemon;
      navigate(`/${id}`);
    }

  };


  return (
    <div className={styles.container} key={id}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <img className={styles.img} src={url} alt="pokemon_image" />
          <p className={styles.id}>{"nº" + id?.toString().padStart(4, '0')}</p>
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
          <h5>{name}</h5>
          <span className={styles.id}>{"nº" + id?.toString().padStart(4, '0')}</span>
          <span>{`height: ${heightToRender}m`}</span>
          <span>{`weight: ${weightToRender}kg`}</span>
          <h5>Abilities</h5>
          <span>{abilitiesToRender}</span>
          <button
            value={id}
            className="btn btn-success"
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
