import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Seemore from './views/Seemore/Seemore';
import Papers from './views/Papers/Papers';
import Path from './views/Path/Path';
import Network from './views/Network/Network';
import Login from './views/Login/Login';
import Animation from './views/Animation/Animation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Animation />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/path"} element={<Path />} />
        <Route path={"/seemore"} element={<Seemore />} />
        <Route path={"/network"} element={<Network />} />
        <Route path={"/papers"} element={<Papers />} />
      </Routes>
    </div>
  );
}

export default App;
