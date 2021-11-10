import React from 'react';
import Categories from './Categories';
import Close from './Close';

import '@styles/components/_menuMobiles.scss'

const MenuMobile = () => {
    return (
        <div className="menuMobile">
            <div className="menuMobile__container">
                {/* <Close /> */}
                <Categories />
                <ul>
                    <li><a href="/">My orders</a></li>
                    <li><a href="/">My account</a></li>
                </ul>
                <ul>
                    <li><a href="/" className="email">yardsale@example.com</a></li>
                    <li><a href="/" className="sign-out">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MenuMobile;