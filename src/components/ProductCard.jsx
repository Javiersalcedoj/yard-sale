import React from 'react';
import "@styles/components/_productCard.scss";

import IconAddToCart from '../components/IconAddToCart'

const ProductCard = ({product}) => {
    const products = product
    return (
        <div className="productCard">
            <img src={product.images[0]} alt={product.title} className="productCard__image" />
            <div className="productCard__info">
                <div className="productCard__text">
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <IconAddToCart products={products}/>
            </div>
        </div>
    );
}

export default ProductCard;