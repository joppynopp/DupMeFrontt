
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';  
import GamePage from './GamePage';  
import HowToPlayPage from './HowToPlayPage';  
import './App.css'; 
import Select from './Select';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
        <Route path="/select" element={<Select />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
