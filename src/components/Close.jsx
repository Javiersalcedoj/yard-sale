import React from 'react';

import close from '@icons/icon_close.png'

import "@styles/components/_iconClose.scss";

const Close = () => {
    return (
        <img src={close} alt="close" className="close" />
    );
}

export default Close;