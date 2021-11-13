import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

import ShoppingCart from '../pages/ShoppingCart'

import '@styles/components/_shoppingNotifications.scss'

import shopping_cart from '@icons/icon_shopping_cart.svg';
import shopping_cart_notification from '@icons/icon_shopping_cart_notification.svg'


const ShoppingNotification = () => {
    const { state, openShoppingCart } = useContext (AppContext)

    return (
        <React.Fragment>
            <img 
                src={ state.cart.length > 0 ?  shopping_cart_notification: shopping_cart} 
                alt="cart" 
                className="shoppingNotification"
                onClick={()=> openShoppingCart()}
            />
            {state.shoppingCart && <ShoppingCart />}
        </React.Fragment>
    );
}

export default ShoppingNotification;