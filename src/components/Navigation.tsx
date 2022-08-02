import React from 'react';
import './Navigation.css'

function Navigation() {
    return (
        <nav className='nav-bar'>
            <ul>
                <li className='logo'><b>Staycation</b></li>
                <li><a href='#'>Locations</a></li>
                <li><a href='#'>My Places</a></li>
                <li><a href='#'>My Bookings</a></li>
                <li className='logout'><a href='#'>LOGOUT</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;