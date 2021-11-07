import React from 'react';

import '@styles/Header.scss';
import Categories from '../components/Categories';
import Logos from '../components/Logos';
import ShoppingNotification from '../components/ShoppingNotification';
import Menus from './Menus';

import arroy from '@icons/flechita.svg';



const Header = () => {
    return (
        <nav className="header">
            <Menus />
            <div className="header__container--left">
                <Logos />
                <Categories />
            </div>
            <div className="header__container--right">
                {/* <p class="header__signin">Sign in</p> */}
                <p className="header__signup">camilayokoo@gmail.com<span><img src={arroy} alt="arroy" /></span></p>
                <ShoppingNotification />
            </div>
        </nav>
    );
}

export default Header;