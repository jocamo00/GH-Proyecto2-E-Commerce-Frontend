import React from 'react';
import { Form } from 'react-bootstrap';


const SearchResults = () => {
    return ( 
        
                // Sección nuevos productos 
                <section className="container-fluid seccion-productos">
                    {/*Filtro resultados*/}
                    <div className="row search-products">
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
                    </div>
                    {/* Fin filtro resultados*/}
                    
                    {/* Productos */}
                    <div id="productos" className="contenedor-productos row col-12">
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
                            <img class="d-block w-100" src='https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg' alt=""/>
                            <div class="contenedor-info">
                                <div class="contenedorMarca">
                                    <p class="marca">Apple</p>
                                    <p class="modelo">macBookAir</p>
                                </div>
                                <div class="contenedorProcesador">
                                    <p class="procesador">i3</p>
                                    <p class="ram">DDR4 8GB</p>
                                    <p class="hd">SSD 512GB</p>
                                </div>
                                <p class="precio">1.500€</p> 
                            </div>
                        </div>
                    </div>
                    {/* Fin productos */}
            </section>
            // Fin sección nuevos productos
     );
}
 
export default SearchResults;