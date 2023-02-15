// import PropTypes from 'prop-types';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';

function Router() {

  return (
    <div className="container" >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={ <PokemonDetail /> } />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default Router;
