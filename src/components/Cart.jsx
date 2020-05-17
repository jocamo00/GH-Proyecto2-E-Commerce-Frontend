
import React from 'react'
import { connect } from "react-redux";
import { Image } from 'react-bootstrap';


const Cart = (props) => {
    return ( 

        <div className="container-fluid a">
            <div className="cart-header">Items in your cart</div>
            {props.cart.map(product =>
            <div className="row cart-item">
                <div className="cart-info col-12 col-md-9">
                    <div className="cart-img col-4 col-md-3">
                        <Image className="img-cart" src={product.imgUrl} fluid />
                    </div>
                    <div className="cart-data col-8 col-md-9">
                        <div>{product.brand} {product.model} {product.processor} {product.memory} {product.hardDisk} {product.sizeMonitor}</div>
                    </div>
                </div>
                <div className="cart-price col-12 col-md-3">
                        <div>{product.price}<span>€</span></div>
                </div>
            </div>
            )}

            <div className="row cart-payment">
                <div className="cart-ticket col-12 col-md-6">
                        <div className="cart-logo">
                            <div>pcShop</div>
                        </div>
                        <div className="cart-total row col-12">
                            <div className="cart-price-data col-6">
                                    <div>TOTAL:</div>
                            </div>
                            <div className="cart-price-total col-6">
                                <div>priceTotal<span>€</span></div>
                            </div>
                        </div>
                        <div className="row cart-btn container-fluid">
                            <div className="cart-make-order col-12 col-md-6 col-lg-8">
                                <div>MAKE ORDER</div>
                            </div>
                            <div className="cart-delete-order col-12 col-md-6 col-lg-4">
                                <div>DELETE ORDER</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
       
     );
}
 
const mapStateToProps = (state) => ({ ...state })
export default connect(mapStateToProps)(Cart);




/*<div className="container-fluid a">
{props.cart.map(product =>
                       <tr>
                           <td>{product.brand}</td>
                           <td>{product.model}</td>
                           <td>{product.memory}</td>
                           <td>{product.price}€</td>
                       </tr>
                   )}
</div>*/


