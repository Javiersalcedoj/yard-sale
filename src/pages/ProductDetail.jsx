import React from 'react';
import Close from '../components/Close';
import Slider from '../components/Slider';
import IconAddToCart from '../components/IconAddToCart';

import '@styles/components/_productDetail.scss'


const ProductDetail = () => {
    return (
        <aside className="productDetail">
           <Close />
            <Slider />
            <div className="productDetail__info">
                <p className="productDetail__price">$ 120,00</p>
                <p className="productDetail__title">Retro refrigerator</p>
                <p className="productDetail__description">With its funcional and practical interior, this refrigerator also fulfills a decorative functio, adding personality and a retro-vintage aesthetic to your kitchen or workplace.</p>
                <button className="primary-button add-to-cart-button"><span><IconAddToCart /></span> Add to cart</button>
            </div>
        </aside>

    );
}

export default ProductDetail;