// import PropTypes from 'prop-types';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function Router() {

  return (
    <div className="container" >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default Router;
