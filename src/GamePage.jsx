import React from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";

function GamePage() {
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
          <p className="turn">
            Turn <span>👉</span>
          </p>
        </div>

        <div class="user user2">
          <img src="/Instruments/trumpet.png" alt="trumpet" />
          <div className="user-and-score">
            <h2>User 2</h2>
            <div class="score">00</div>
            <h3>Score</h3>
          </div>
        </div>
      </div>

      <div class="gameplay">
        <p class="status">Player2's creating a sequence...</p>
        <div class="sequence-boxes">
          <div class="sequence"></div>
          <div class="sequence"></div>
          <div class="sequence"></div>
          <div class="sequence"></div>
          <div class="sequence"></div>
        </div>
        <button class="submit">Submit</button>
      </div>

      <div class="controls">
        <button class="replay">Replay 🔊</button>
        <div class="piano-keys">
          <div class="white-key">C</div>
          <div class="white-key">D</div>
          <div class="white-key">E</div>
          <div class="white-key">F</div>
          <div class="white-key">G</div>
          <div class="white-key">A</div>
          <div class="white-key">B</div>
        </div>

        <button class="reset">Reset</button>
      </div>
    </div>
  );
}

export default GamePage;
