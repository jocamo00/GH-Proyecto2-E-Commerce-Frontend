
import React from 'react'

import { connect } from "react-redux";


const Cart = (props) => {
    return ( 

        <div className="container-fluid a">
             {props.cart.map(product =>
                                    <tr>
                                        <td>{product.brand}</td>
                                        <td>{product.model}</td>
                                        <td>{product.memory}</td>
                                        <td>{product.price}€</td>
                                    </tr>
                                )}
        </div>
     );
}
 
const mapStateToProps = (state) => ({ ...state })
export default connect(mapStateToProps)(Cart);