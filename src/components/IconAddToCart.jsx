import React from 'react';

import addToCart from '@icons/bt_add_to_cart.svg';

import '@styles/components/_iconAddToCart.scss'

const IconAddToCart = () => {
    return (
        <img src={addToCart} alt="cart" className="iconAddToCard"/>
    );
}

export default IconAddToCart;