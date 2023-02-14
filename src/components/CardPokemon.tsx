import { IAllPokemons } from '../interfaces/AllPokemons';
import styles from './CardPokemon.module.css'
import TypeTag from './TypeTag';

const CardPokemon = ({ id, url, name, type }: IAllPokemons) => {

  const mapTypesToRender = (id: number | any) => {
    return type.map((eachObject) => ({
      id,
      type: eachObject,
    }))
  }
  const toRender = mapTypesToRender(id)

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
                  key={`${index}-${eachType.type}`}
                  id={eachType.id}
                  type={eachType.type}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.cardBack}>
          <h1>oi</h1>
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;



{/* <div class="flip-card-container" style="--hue: 220">
  <div class="flip-card">
    <div class="card-front">
      <figure>
        <div class="img-bg"></div>
        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake">
        <figcaption>Brohm Lake</figcaption>
      </figure>

      <ul>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
        <li>Detail 4</li>
        <li>Detail 5</li>
      </ul>
    </div>
    <div class="card-back">
      <figure>
        <div class="img-bg"></div>
        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake">
      </figure>

      <button>Book</button>

      <div class="design-container">
        <span class="design design--1"></span>
        <span class="design design--2"></span>
        <span class="design design--3"></span>
        <span class="design design--4"></span>
        <span class="design design--5"></span>
        <span class="design design--6"></span>
        <span class="design design--7"></span>
        <span class="design design--8"></span>
      </div>
    </div>
  </div>
</div>
<!-- /flip-card-container -->


.container:hover .card,
.container:focus-within .card {
  transform: rotateY(180deg);
} */}

