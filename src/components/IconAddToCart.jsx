import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext'

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

import '@styles/components/_iconAddToCart.scss'

const IconAddToCart = ({products}) => {
    const [cart, setCart] = useState(addToCartImage)
    const { state, addToCart, removeFromCart } = useContext(AppContext);

    const itemIsFound = (item) => state.cart.some(elemt => elemt.id === item.id);

    const handleClick = (item ) => {
        if (!itemIsFound(item)) {
            addToCart(item);
            setCart(addedToCartImage);
        } else {
            removeFromCart (item);
            setCart(addToCartImage);
        }

    }
    
    return (
        <React.Fragment>
            <img 
                src={cart} alt="cart" className="iconAddToCard" 
                onClick={()=> handleClick(products)}
                id={`addtocard${products.id}`}
            />
        </React.Fragment>
    );
}

export default IconAddToCart;