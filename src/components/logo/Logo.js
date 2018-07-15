import React from 'react';
import Tilt from 'react-tilt';
import eye from './eye.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-3 tc' options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className='Tilt-inner pa3'><img src={eye} alt='logo'/></div>
            </Tilt>
        </div>
    );
}

export default Logo;