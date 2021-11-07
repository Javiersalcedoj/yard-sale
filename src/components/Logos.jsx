import React from 'react';
import "@styles/components/_logos.scss";

import logo from '@logos/logo_yard_sale.svg';

const Logo = () => {
    return (
        <img src={logo} alt="logo" className="logo" />
    );
}

export default Logo;