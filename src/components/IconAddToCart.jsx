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
    // const changeImg = (product) => {
    //     if (!state.cart.includes(product)) {
    //          setCart(addToCartImage)
    //          console.log(hola)
    //     }
    // };

    
    return (
        <React.Fragment>
            {/* <img 
                src={cart} alt="cart" className="iconAddToCard" 
                onClick={()=> handleClick(products)}
            />
            {()=> changeImg(products)} */}
            {  state.cart.includes(products) ? <img className="iconAddToCard" src={addedToCartImage} alt="added to cart" onClick={()=> handleClick(products)}/>  : <img className="add-to-cart-btn pointer" src={addToCartImage} alt="add to cart"  onClick={()=> handleClick(products)}/> }
        </React.Fragment>
    );
}

export default IconAddToCart;