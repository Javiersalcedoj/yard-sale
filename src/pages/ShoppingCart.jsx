import React, { useContext} from 'react';

import AppContext from '../context/AppContext';

import ShoppingCard from "../components/ShoppingCard";
import iconBack from "@icons/black.svg";

import '@styles/components/_shoppingCart.scss';

const ShoppingCart = () => {
    const {state} = useContext (AppContext)

    const sumaTotal = () => {
        const sum = state.cart.reduce((suma, elemt)=> suma + elemt.price , 0 )
        return sum;
    }
    return (
        <aside className="shoppingCart">
            <div className="shoppingCart__title">
                {/* <img src={iconBack} alt="array" /> */}
                <p>My order</p>
            </div>
            {state.cart.map(product =>(
                <ShoppingCard product={product} iconClose="true" key={`orderItem-${product.id}`}/>
            ))}
            <div className="shoppingCart__total">
                <p>Total</p>
                <p>${sumaTotal()}</p>
            </div>
            <button className="primary-button">Checkout</button>
        </aside>
    );
}

export default ShoppingCart;