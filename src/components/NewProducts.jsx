import React, {useState, useEffect } from 'react';
import { API_URL } from '../api-config';
import Product from '../components/Product';
import axios from 'axios';


const NewProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(API_URL + `/products/date/productsnews`)
            .then(res=>setProducts(res.data))
            .catch(console.error)
    },[])
    return ( 

            // Sección nuevos productos
            <section className="container-fluid seccion-productos">
                <h2 className="txt-seccion-productos col-12">New Products</h2>
                <hr></hr>

                {/* Productos */}
                <div id="productos" className="contenedor-productos row col-12">
                    {products.map(product=> <Product key={product._id} product={product}/>)}
                </div>
                {/* Fin productos */}
            </section>
            // Fin sección nuevos productos

     );
}
 
export default NewProducts;