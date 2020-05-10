import React from 'react';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {
    return ( 

        <div className="container-fluid">
            <div className="row container-card">
                <img className="img col-12 col-md-6 col-lg-5" src="https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-caracteristicas.jpg" alt="" fluid/>
                <div className="info col-12 col-md-6 col-lg-5">
                    <p className="title"><b>Lenovo IdeaPad S145-15IILIntel Core i5-1035G1/8 GB/512GB SSD/15.6"</b></p>
                    <div className="info-price">
                        <p className="price"><b>800</b><span>€</span></p>
                        <p className="stock">2 <span>unid.</span></p>
                    </div>
                    <p className="description">Con procesadores Intel Core de 10.ª generación, 
                    el IdeaPad S145 se ha diseñado para seguirte el ritmo, independientemente de la tarea. 
                    También incluye una gama de opciones de almacenamiento seguras, 
                    como una unidad SSD híbrida con unidad de disco duro, 
                    lo que garantiza tiempos de respuesta incluso más rápidos.</p>
                    <div className="row btn-buy">
                        <Button variant="outline-secondary">Add Cart</Button>
                        <Button variant="outline-secondary">Take Cart</Button>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default ProductDetail;