import React from 'react';

import ShoppingCard from "../components/ShoppingCard";
import iconBack from "@icons/black.svg";

import '@styles/components/_shoppingCart.scss';

const ShoppingCart = () => {
    return (
        <aside className="shoppingCart">
            <div className="shoppingCart__title">
                <img src={iconBack} alt="array" />
                <p>My order</p>
            </div>
            <ShoppingCard iconClose="true"/>
            <ShoppingCard iconClose="true"/>
            <ShoppingCard iconClose="true"/>
            <div className="shoppingCart__total">
                <p>Total</p>
                <p>$560.00</p>
            </div>
            <button className="primary-button">Checkout</button>
        </aside>
    );
}

export default ShoppingCart;