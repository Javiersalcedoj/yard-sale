import React from 'react';

import '@styles/components/_menuDesktop.scss'

const MenuDesktop = () => {
    return (
        <div className="menuDesktop">
            <ul>
                <li><a href="/" className="title">My orders</a></li>
                <li><a href="/" className="title">My account</a></li>
                <li><a href="/" className="title">Sign out</a></li>
            </ul>
        </div>
    );
}

export default MenuDesktop;