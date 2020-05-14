import React, {useState, useEffect } from 'react';
import axios from 'axios';


const NewProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3300/api/products`)
            .then(res=>setProducts(res.data))
            .catch(console.error)
    },[])
    return ( 

            // Sección nuevos productos
            <section className="container-fluid seccion-productos">
                <h2 className="txt-seccion-productos col-12">New Products</h2>
                <hr></hr>

                {/* Productos */}
                <div id="productos" className="contenedor-productos products row col-12">
                    {products.map(product=>
                        <div className="container-producto product col-sm-6 col-lg-4 col-xl-3" key={product._id}>
                            <img class="d-block w-100" src={product.imgUrl} alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">{product.brand}</p>
                                    <p class="modelo">{product.model}</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">{product.processor}/&nbsp;</p>
                                    <p class="ram">{product.memory}/&nbsp;</p>
                                    <p class="hd">{product.hardDisk}</p>
                                </div>
                                <p class="precio">{product.price}<span>€</span></p> 
                            </div>
                        </div>
                    )}
                </div>
                {/* Fin productos */}
            </section>
            // Fin sección nuevos productos

     );
}
 
export default NewProducts;