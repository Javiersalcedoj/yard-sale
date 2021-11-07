import React from 'react';
import "@styles/components/_productCard.scss";

import producImagen from '@image/bikes.jpg'
import IconAddToCart from '../components/IconAddToCart'

const ProductCard = () => {
    return (
        <div className="productCard">
            <img src={producImagen} alt="bicicleta" className="productCard__image" />
            <div className="productCard__info">
                <div className="productCard__text">
                    <p>$120.00</p>
                    <p>Round shelf</p>
                </div>
                <IconAddToCart />
            </div>
        </div>
    );
}

export default ProductCard;