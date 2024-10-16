import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import GamePage from './GamePage';
import HowToPlayPage from './HowToPlayPage';
import Select from './Select';

function Layout() {
  const location = useLocation();
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      // Play music after the user interacts
      if (location.pathname === '/' || location.pathname === '/select') {
        audioRef.current.play();
      }
      window.removeEventListener('click', handleInteraction);
    };

    // Ensure music is ready to play
    audioRef.current.addEventListener('canplaythrough', () => {
      setAudioReady(true);
    });

    window.addEventListener('click', handleInteraction); // Start music on user interaction

    return () => {
      window.removeEventListener('click', handleInteraction);
    };
  }, [location]);

  useEffect(() => {
    if (audioReady) {
      // Play/pause logic based on the current route
      if (location.pathname === '/' || location.pathname === '/select') {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [location, audioReady]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/background_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
        <Route path="/select" element={<Select />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
