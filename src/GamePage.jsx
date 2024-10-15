import React from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";
import { useState, useEffect } from "react";

function GamePage() {
  const [sequence, setSequence] = useState([]);

  // Map key presses and clicks to musical notes
  const noteMap = {
    z: { note: "C", sound: "/notes/c.mp3" },
    x: { note: "D", sound: "/notes/d.mp3" },
    c: { note: "E", sound: "/notes/e.mp3" },
    v: { note: "F", sound: "/notes/f.mp3" },
    b: { note: "G", sound: "/notes/g.mp3" },
    n: { note: "A", sound: "/notes/a.mp3" },
    m: { note: "B", sound: "/notes/b.mp3" },
  };

  // Handle key press event
  useEffect(() => {
    const handleKeyPress = (event) => {
      const noteInfo = noteMap[event.key];
      if (noteInfo) {
        addNoteToSequence(noteInfo.note);  // Pass only the note string
        playSound(noteInfo.sound);  // Play the corresponding sound
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.volume = 0.2;  // Set the volume to 20% (adjust as needed)
    audio.play();
  };

  // Function to add notes to the sequence (up to 5 notes)
  const addNoteToSequence = (note) => {
    setSequence((prevSequence) => {
      if (prevSequence.length < 5) {
        return [...prevSequence, note];
      } else {
        return prevSequence; // Prevent adding more than 5 notes
      }
    });
  };

  // Function to reset the sequence
  const resetSequence = () => {
    setSequence([]); // Reset the sequence to an empty array
  };

  return (
    <div className="game-container">
      <div className="header">
        <div className="user user1">
          <div className="user-and-score">
            <h2>User 1</h2>
            <div className="score">00</div>
            <h3>Score</h3>
          </div>
          <img src="/Instruments/piano.png" alt="piano" />
        </div>

        <div className="time">
          <div className="timer-background">
            <img src="/gamepage_image/Rectangle 18.png" alt="timer-banner" />
            <p className="time-text">Time</p>
            <div className="timer">19</div>
          </div>
          <div className="turn-pointer">
            <p className="turn">Turn</p>
            <img src="/gamepage_image/point-right.png" alt="point-right" />
          </div>
        </div>

        <div className="user user2">
          <img src="/Instruments/trumpet.png" alt="trumpet" />
          <div className="user-and-score">
            <h2>User 2</h2>
            <div className="score">00</div>
            <h3>Score</h3>
          </div>
        </div>
      </div>

      <div className="gameplay">
      <p className="status">Player2's creating a sequence...</p>
        <div className="sequence-boxes">
          {sequence.map((note, index) => (
            <div key={index} className={`sequence note`}>
              {note}  {/* Render only the note string */}
            </div>
          ))}
          {/* Empty boxes for remaining sequence slots */}
          {Array(5 - sequence.length)
            .fill("")
            .map((_, index) => (
              <div key={index + sequence.length} className="sequence"></div>
            ))}
        </div>
        <button className="submit">Submit</button>
      </div>

      <div className="controls">
        <button className="replay">
          Replay
          <img src="/gamepage_image/speaker.png" alt="speaker" />
        </button>

        <div className="piano-keys">
          <div className="white-key" onClick={() => { addNoteToSequence("C"); playSound("/notess/c.mp3"); }}>C</div>
          <div className="white-key" onClick={() => { addNoteToSequence("D"); playSound("/notess/d.mp3"); }}>D</div>
          <div className="white-key" onClick={() => { addNoteToSequence("E"); playSound("/notess/e.mp3"); }}>E</div>
          <div className="white-key" onClick={() => { addNoteToSequence("F"); playSound("/notess/f.mp3"); }}>F</div>
          <div className="white-key" onClick={() => { addNoteToSequence("G"); playSound("/notess/g.mp3"); }}>G</div>
          <div className="white-key" onClick={() => { addNoteToSequence("A"); playSound("/notess/a.mp3"); }}>A</div>
          <div className="white-key" onClick={() => { addNoteToSequence("B"); playSound("/notess/b.mp3"); }}>B</div>
        </div>

        <button className="reset" onClick={resetSequence}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default GamePage;
