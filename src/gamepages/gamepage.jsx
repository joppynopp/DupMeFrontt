import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GamePage.css'


function GamePage() {

    return(
        <div class="game-container">
            <div class="header">
                <div class="user user1">
                    <h2>User 1</h2>
                    <div class="score">00</div>
                    <img src="/Instruments/piano.png" alt="piano" />
                    <p>Score</p>
                </div>
                <div class="time">
                    <p>Time</p>
                    <div class="timer">19</div>
                    <p>Turn <span>👉</span></p>
                </div>
                <div class="user user2">
                    <h2>User 2</h2>
                    <div class="score">00</div>
                    <img src="/Instruments/trumpet.png" alt="trumpet" />
                    <p>Score</p>
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
                    <button class="key">C</button>
                    <button class="key">D</button>
                    <button class="key">E</button>
                    <button class="key">F</button>
                    <button class="key">G</button>
                    <button class="key">A</button>
                    <button class="key">B</button>
                </div>
                <button class="reset">Reset</button>
            </div>
        </div>
    )
    
}

export default GamePage;