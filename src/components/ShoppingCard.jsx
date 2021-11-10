//AGREGAMOS EL CONTEXT
import React, {useContext} from 'react';
import AppContext from '../context/AppContext';

import '@styles/components/_shoppingCard.scss';

import Close from './Close';

const ShoppingCard = ({ iconClose, product }) => {
    const { removeFromCart } = useContext (AppContext);

    const handleRemove = product => {
        removeFromCart(product);
    }

    return (
        <div className="shoppingCard">
            <figure>
                <img src={product.images[0]} alt={product.title} className="shoppingCard__img"/>
            </figure>
            <div className="shoppingCard__texts">
                <p className="shoppingCard__name">{product.title}</p>
                <p className="shoppingCard__price">${product.price}
                    <span className={iconClose} onClick= {()=> handleRemove(product) }>
                        <Close />
                    </span>
                </p>
            </div>
        </div>
    );
}

export default ShoppingCard;