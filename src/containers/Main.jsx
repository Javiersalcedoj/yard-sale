import React from 'react';
import ProductCard from '../components/ProductCard';

//llamanos lo que hicimos
import useGetProducts from '../hooks/useGetProducts';

import "@styles/Main.scss"

const API = 'https://api.escuelajs.co/api/v1/products?limit=12&offset=1';

const Main = () => {
    //hacemos ahora el llamdo del eso
    const products = useGetProducts(API)
    
    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map( product => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </section>
    );
} 

export default Main;