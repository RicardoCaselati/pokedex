import { AllPokemons } from '../interfaces/AllPokemons';
import styles from './CardPokemon.module.css'

const CardPokemon = ({ id, url, name }: AllPokemons) => {
  return (
    <div className={styles.container} key={id}>
      <div className={styles.row}>
        <img className={styles.img} src={url} alt="pokemon_image" />
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default CardPokemon;
