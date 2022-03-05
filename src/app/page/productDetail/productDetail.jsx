import React, { Component } from 'react';
import ProductContent from './productContent';
import ProductForm from './productForm';
import { getForms } from '../fakeServer/productChaillo';
import { getProducts } from '../fakeServer/productChaillo';
import './style/productDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class ProductDetail extends Component {

    handleSubmit = (value) =>{
        console.log('you have a new order!',value) ; 
    }

    constructor(){
        super() ; 
        this.state = {
            forms: getForms(),
            products : getProducts() ,
        }
    }

    render() {
        const { match , history } = this.props ;
        const { forms , products } = this.state ; 

        return (
            <div className="background-page">
                <ProductContent 
                    id={match.params._id}
                    products={products}
                />
                <ProductForm 
                    forms={forms} 
                    onSubmit={this.handleSubmit}
                    history={history}       
                />
            </div>
        );
    }
}

export default ProductDetail; 