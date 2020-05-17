import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    return ( 
        <Link className="container-producto col-sm-6 col-md-4 col-lg-3" key={product._id} to={'/products/'+product._id}>
            <img className="d-block w-100" src={product.imgUrl} alt=""/>
            <div className="contenedor-info">
                <div className="contenedorMarca">
                    <p className="marca">{product.brand}</p>
                    <p className="modelo">{product.model}</p>
                </div>
                <div className="contenedorProcesador">
                    <p className="procesador">{product.processor}/&nbsp;</p>
                    <p className="ram">{product.memory}/&nbsp;</p>
                    <p className="hd">{product.hardDisk}</p>
                </div>
                <p className="precio">{product.price}<span>€</span></p> 
            </div>
        </Link>
     )
}
 
export default Product;