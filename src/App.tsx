import { Link } from 'react-router-dom';
import styles from './App.module.css';
import Router from './routes/Index';
import backgroundVideo from './images/pokemon-emerald.mp4';


function App() {
  return (
    <div className="App">
 <video id='video' className="background-video" loop autoPlay width="100%" height="100%">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <h1 className={styles.title}>Pokédex</h1>
      <nav>
        <Link className={styles.link} to="/">{`Home`}</Link>
        <Link className={styles.link} to="/about">{`About`}</Link>
        <Link className={styles.link} to="/favorites">{`Favorite Pokémons`}</Link>
      </nav>
      <div className={styles.container}>
        <Router />
      </div>
    </div>
  );
}

export default App;
