import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login/Login';

import Crud from './crud/crud';
import Navbar from './Navbar/Navbar';
import Home from './pages/Homee/Home';

const App = () => {
  return (
    <Router>
   <Navbar/>
      <Routes>
        <Route exact path="/login"  element={   <Login/>} />
        <Route exact path="/crud" element={<Crud/>} />
        <Route exact path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
