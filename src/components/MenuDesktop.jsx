import React from 'react';

import '@styles/components/_menuDesktop.scss'

const MenuDesktop = () => {
    return (
        <div class="menuDesktop">
            <ul>
                <li><a href="/" class="title">My orders</a></li>
                <li><a href="/" class="title">My account</a></li>
                <li><a href="/" class="title">Sign out</a></li>
            </ul>
        </div>
    );
}

export default MenuDesktop;