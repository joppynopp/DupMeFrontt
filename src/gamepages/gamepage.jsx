import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GamePage.css'


function GamePage() {
    const navigate = useNavigate();

    return(
        <div className='container'>
            <div className='section top'>
                <div className='top-left'></div>
                <div className='top-middle'></div>
                <div className='top-right'></div>

            </div>
            
            <div className='section mid'>This is mid section.</div>
            <div className='section bottom'>This is bottom section.</div>
        </div>
    )
    
}

export default GamePage;