import { Link } from 'react-router-dom'; 
import './App.css';
import Router from './routes/Index';


function App() {

  return (
    <div className="App">
      <h1 className="title">Pokédex</h1>
      <nav>
        <Link className="link" to="/">{`Home`}</Link>
        <Link className="link" to="/about">{`About`}</Link>
        <Link className="link" to="/favorites">{`Favorite Pokémons`}</Link>
      </nav>
      <Router />
    </div>
  );
}

export default App;
