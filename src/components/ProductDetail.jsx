import React, { Component } from 'react';
import { API_URL } from '../api-config';
import axios from "axios";
import { Button } from 'react-bootstrap';


export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        axios.get(API_URL + '/products/' + _id)//hacemos la petición para obtener ese producto en detalle
            .then(res => this.setState({ product: res.data }))//actualizamos el estado acorde a la respuesta del servi
    }
    render() {
        return (
            <div className="container-fluid container-product-detail">
            <div className="row container-card">
                <img className="img col-12 col-md-6 col-lg-5" src={this.state.product.imgUrl} alt="" fluid/>
                <div className="info col-12 col-md-6 col-lg-5">
                    <p className="title"><b>{this.state.product.brand}
                    {this.state.product.model}<br/>
                    {this.state.product.processor}/&nbsp;
                    {this.state.product.memory}/&nbsp;
                    {this.state.product.hardDisk}
                    {this.state.product.sizeMonitor}</b></p>
                    
                    <div className="info-price">
                        <p className="price"><b>{this.state.product.price}</b><span>€</span></p>
                        <p className="stock">{this.state.product.stock} <span>unid.</span></p>
                    </div>
                    <p className="description">{this.state.product.description}</p>
                    <div className="row btn-buy">
                        <Button variant="outline-secondary">Add Cart</Button>
                        <Button variant="outline-secondary">Take Cart</Button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}