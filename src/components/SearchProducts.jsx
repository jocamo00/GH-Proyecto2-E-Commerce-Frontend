import React from 'react';
import Product from './Product';


const SearchProducts = ({imagenes}) => {
    return ( 

        // Sección nuevos productos 
        <section className="container-fluid seccion-productos">
                
                {/* Productos */}
                <div id="productos" className="contenedor-productos row col-12">
                {imagenes.map(product=> <Product key={product._id} product={product}/>)}
                {/*imagenes.map(imagen => (
                    <Imagen 
                        key={imagen.id}
                        imagen={imagen}
                    />
                ))*/}
                    
                </div>
                {/* Fin productos */}
        </section>
        // Fin sección nuevos productos

     );
}
 
export default SearchProducts;