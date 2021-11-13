import { useState } from "react";

const initialState = {
    cart: [],
    shoppingCart: false,
    menuMobile: false,
};

const useInitialState = () => {
    const [state, setState] = useState (initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart:[...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id)
        })
    }

    const openShoppingCart = () => {
        setState({
            ...state,
            shoppingCart: !state.shoppingCart
        });
    } 

    const openMenuMobile = () => {
        setState({
            ...state,
            menuMobile: !state.menuMobile
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
        openShoppingCart,
        openMenuMobile,
    }
}
export default useInitialState