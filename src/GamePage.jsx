import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GamePage.css'


function GamePage() {

    return(
        <div className="game-container">
            <div className="header">
                <div className="user user1">
                    <div className='user-and-score'>
                        <h2>User 1</h2>
                        <div className="score">00</div>
                        <h3>Score</h3>
                    </div>
                    <img src="/Instruments/piano.png" alt="piano" />
                </div>

                <div className="time">
                    <div className='timer-background'>
                        <p>Time</p>
                        <div className="timer">19</div>
                    </div>
                    <p>Turn <span>👉</span></p>
                </div>
                <div class="user user2">
                    <img src="/Instruments/trumpet.png" alt="trumpet" />
                    <div className='user-and-score'>
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