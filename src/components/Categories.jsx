import React from 'react';
import '@styles/components/_categories.scss';

const Categories = () => {
    return (
        <ul className= "categorie">
            <li><a href="/">All</a></li>
            <li><a href="/">Clothes</a></li>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Furniture</a></li>
            <li><a href="/">Toys</a></li>
            <li><a href="/">Others</a></li>
        </ul>
    );
}


export default Categories;