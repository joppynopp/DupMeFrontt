import React, { useEffect } from 'react';
import './HowToPlayPage.css';
import { useNavigate } from 'react-router-dom';

const HowToPlayPage = () => {
  const navigate = useNavigate();

  // Function to handle key press and play the corresponding note
  const handleKeyPress = (event) => {
    const keyToNote = {
      z: 'c', // 'z' corresponds to 'c' note
      x: 'd',
      c: 'e',
      v: 'f',
      b: 'g',
      n: 'a',
      m: 'b', // 'm' corresponds to 'b' note
    };

    const note = keyToNote[event.key]; // Get the note for the pressed key
    if (note) {
      // Create a new Audio object and play the corresponding sound file
      const audio = new Audio(`/notes/${note}.mp3`);
      audio.play();
    }
  };

  // Attach event listener when the component mounts and clean up when it unmounts
  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div>
          Press&nbsp;&nbsp;&nbsp;
          <span style={{ color: 'red' }}>z,x,c,v,b,n,m</span>&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;hear&nbsp;&nbsp;&nbsp;
          <span style={{ color: 'red' }}>c,d,e,f,g,a,b</span>&nbsp;&nbsp;&nbsp;notes
        </div>
        <div className="instrument">
          <img src="/Instruments/piano.png" alt="piano" />
        </div>
      </div>

      <div className="menu">
        <img
          src="/MainMenu.png"
          alt="menu"
          className="menu-button"
          onClick={() => navigate('/')}  
        />
      </div>
    </>
  );
};

export default HowToPlayPage;

