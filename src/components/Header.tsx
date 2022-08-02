import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="hero-image">
            <div className='hero-wrap'>
                <div className="hero-text" style={{ color: 'black' }}>
                    <h1 style={{ color: 'white'}}>Enjoy your travels</h1>
                    <h3 style={{ color: 'white' }}>with Staycation and collect rewards</h3>
                    <h5 style={{ color: '#1A3440' }}>Book now & save 10% or more today</h5>
                </div>
            </div>
        </div>
    );
}

export default Header;