import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Papers from './views/Papers/Papers';
import Testnet from './views/Testnet/Testnet';
import Path from './views/Path/Path';
import Network from './views/Network/Network';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/path"} element={<Path />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/network"} element={<Network />} />
        <Route path={"/papers"} element={<Papers />} />
        <Route path={"/testnet"} element={<Testnet />} />
      </Routes>
    </div>
  );
}

export default App;
