import './App.css';
import Router from './routes/Index';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <h1 className="title">Pokédex</h1>
      <div className="container">
        <div className="container-inner">
          <Router />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
