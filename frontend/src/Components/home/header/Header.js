import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';

const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <Slider />
        </header>
    );
}

export default Header;
