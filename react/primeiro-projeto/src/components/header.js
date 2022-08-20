import React from 'react';
import '../css/global.css';
import '../css/header.css';

const Header = () => {
    return (
        <div className='titulo'>
            <div className='centered'>
                <h1>Relâmpago Marquinhos</h1>
            </div>
            <div>
                <p>VROOM VROOM!!!</p>
            </div>
        </div>
    );
};

export default Header;