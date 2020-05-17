import React from 'react';
import { Form } from 'react-bootstrap';
import Product from './Product';


const SearchProducts = ({imagenes}) => {
    return ( 

        // Sección nuevos productos 
        <section className="container-fluid seccion-productos">
                {/*Filtro resultados*/}
                {/*<div className="row search-products">
                    <div className="col-sm-6">
                        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                            <Form.Control as="select" size="lg" custom>
                                <option>Precio: Más caros primero</option>
                                <option>Precio: Más baratos primero</option>
                                <option>Novedades</option>
                                <option>Más vendidos</option>
                                <option>Envío gratis</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>*/}
                {/* Fin filtro resultados*/}
                
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