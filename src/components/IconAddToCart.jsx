//traemos este nuevo hook
import React, { useContext, useState } from 'react';
//imprtamos add context
import AppContext from '../context/AppContext'

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg'

import '@styles/components/_iconAddToCart.scss'

const IconAddToCart = ({products}) => {
    const [cart, setCart] = useState(addToCartImage)
    // hacemos el llamdo del estado y traemos la funcion add to cart
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        //llamamamos la funcion
        addToCart(item);
        setCart(addedToCartImage);
    }
    
    return (
        <React.Fragment>
            {/* en el momento de hace click le decimos que haga la funcion y le pasamos el producto */}
            <img src={cart} alt="cart" className="iconAddToCard" onClick={()=> handleClick(products)}/>
        </React.Fragment>
    );
}

export default IconAddToCart;