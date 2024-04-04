import React from 'react';
import './App.css';
import Home from './components/Home/Main';
import User from './components/Users/User';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foot from './components/Foot/Foot';
import Header from './components/Header/Header';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<User />} />
        
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;
