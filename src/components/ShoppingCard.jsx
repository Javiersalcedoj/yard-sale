import React from 'react';

import '@styles/components/_shoppingCard.scss';
import product from '@image/bikes.jpg';

import Close from './Close';

const ShoppingCard = (prop) => {
    const iconClose = prop.iconClose;
    return (
        <div className="shoppingCard">
            <figure>
                <img src={product} alt="bikes" className="shoppingCard__img"/>
            </figure>
            <div className="shoppingCard__texts">
                <p className="shoppingCard__name">Bikes</p>
                <p className="shoppingCard__price">$30.00<span className={iconClose}><Close /></span></p>
            </div>
        </div>
    );
}

export default ShoppingCard;