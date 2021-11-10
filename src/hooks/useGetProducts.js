//traemos los recursos que vamos a utilizar 
import { useEffect, useState } from 'react';
import axios from 'axios';

//creamos una constante que va a hacer la funcion que vamos a exportar. Y Dentro colocamos la logica.


const useGetProducts = (API) => {
    const [products, setProducts] = useState ([]);

    useEffect (()=>{
        const fetchProduct = async () => {
            const response = await axios(API);
            setProducts(response.data)
        }
        fetchProduct();
    }, []);

    return products;

};

export default useGetProducts;