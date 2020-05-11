import React from 'react';
import { Image, Button } from 'react-bootstrap';


const Cart = () => {
    return ( 

        <div className="container-fluid a">
            <div className="row card-cart">
                <div className="row product-cart col-12 col-md-9">
                    <Image className="img-cart col-5 col-md-4" src="https://thumb.pccomponentes.com/w-530-530/articles/28/280976/lenovo-ideapad-s145-15iil-intel-core-i5-1035g1-8-gb-512gb-ssd-156-review.jpg" fluid />
                    <p className="title-cart col-7 col-md-6">Lenovo IdeaPad S145-15IILIntel Core i5-1035G1/8 GB/512GB SSD/15.6"</p>
                    <div className="price-cart col-6 col-md-1">
                        <p><b>800</b><span>€</span></p>
                    </div>
                    
                    <Button className="btn-delete col-6 col-md-1" variant="danger">Danger</Button>
                </div>
                <div className="product-ticket col-12 col-md-3">2</div>
            </div>
        </div>
     );
}
 
export default Cart;