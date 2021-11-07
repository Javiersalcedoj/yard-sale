import React from 'react';

import '@styles/components/_slider.scss';

import product from "@image/bikes.jpg"

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__container">
                <img src={product} alt="Bikes" />
                <img src={product} alt="Bikes" />
                <img src={product} alt="Bikes" />
            </div>
            <div className="slider__control">
                <div className="slider__circle --1" />
                <div className="slider__circle --2" />
                <div className="slider__circle --3" />
            </div>
        </div>
    );
}

export default Slider;