
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';  
// import GamePage from './GamePage';  // Correct import for the game page
import HowToPlayPage from './HowToPlayPage';  // Correct import for the how-to-play page
import './App.css'; 
import Select from './Select';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </Router>
  )
}

export default App
