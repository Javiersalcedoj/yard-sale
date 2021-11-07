import React from 'react';

import '@styles/components/_shoppingNotifications.scss'

import shopping_cart from '@icons/icon_shopping_cart.svg';
import shopping_cart_notification from '@icons/icon_shopping_cart_notification.svg'

const ShoppingNotification = () => {
    return (
        <img src={shopping_cart} alt="cart" className="shoppingNotification" />
    );
}

export default ShoppingNotification;