import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext'

import '@styles/Header.scss';
import Categories from '../components/Categories';
import Logos from '../components/Logos';
import ShoppingNotification from '../components/ShoppingNotification';
import MenuDesktop from '../components/MenuDesktop';
import MenuMobile from '../components/MenuMobile';

import arroy from '@icons/flechita.svg';
import menu from '@icons/icon_menu.svg';


const Header = () => {
    const [toggleMenuDesktop, setToggleMenuDesktop] = useState (false);
    const handleToggleMenuDesktop = () => {
        setToggleMenuDesktop(!toggleMenuDesktop);
    }

    const { state, openMenuMobile } = useContext (AppContext)

    return (
        <nav className="header">
            <img src={menu} alt="menu" className="menu"  onClick={()=> openMenuMobile()}/>
            <div className="header__container--left">
                <Logos />
                <Categories />
            </div>
            <div className="header__container--right">
                {/* <p className="header__signin">Sign in</p> */}

                <p className="header__signup" onClick={handleToggleMenuDesktop} >
                    camilayokoo@gmail.com
                    <span><img src={arroy} alt="arroy" /></span>
                </p>
                <ShoppingNotification />
            </div>
            {toggleMenuDesktop && <MenuDesktop />}
            {state.menuMobile && <MenuMobile />}
        </nav>
    );
}

export default Header;