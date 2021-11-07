import React from 'react';

import MenuMobile from '../components/MenuMobile';

import menu from '@icons/icon_menu.svg';

const Menus = () => {
    return (
        <React.Fragment>
            <img src={menu} alt="menu" className="menu" />
            {/* <MenuMobile /> */}
        </React.Fragment>
    );
}

export default Menus;