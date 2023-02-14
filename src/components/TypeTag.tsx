import { IType } from '../interfaces/AllPokemons';
import styles from './CardPokemon.module.css'

const TypeTag = ({ id, type }: IType) => {
  const typeClasses = {
    grass: `${styles.container} ${styles.grass}`,
    poison: `${styles.container} ${styles.poison}`,
    fire: `${styles.container} ${styles.fire}`,
    flying: `${styles.container} ${styles.flying}`,
    water: `${styles.container} ${styles.water}`,
    bug: `${styles.container} ${styles.bug}`,
    normal: `${styles.container} ${styles.normal}`
  }

  const tagToRender = (
    <span className={typeClasses[type.name as keyof typeof typeClasses]}>{type.name}</span>
  )

  return (
    <div className={styles.container} key={id}>
      {tagToRender}
    </div>
  );
};

export default TypeTag;