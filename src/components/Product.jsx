import React from 'react';


const Product = ({product}) => {
    return ( 
        <div className="container-producto col-sm-6 col-lg-4 col-xl-3" key={product._id}>
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
     );
}
 
export default Product;