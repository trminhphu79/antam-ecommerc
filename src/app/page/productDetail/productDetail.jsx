import React, { Component } from 'react';
import ProductContent from './productContent';
import ProductForm from './productForm';
import { getForms } from '../fakeServer/productChaillo';
import './style/productDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class ProductDetail extends Component {
    state = {
        forms: [],
    }

    componentDidMount() {
        this.setState({
            forms: getForms(),
        });
    }

    handleSubmit = (value) =>{
        console.log('you have a new order!',value) ; 
    }

    render() {
        const { forms } = this.state ; 

        return (
            <React.Fragment>
                <ProductContent />
                <ProductForm 
                    forms={forms} 
                    onSubmit={this.handleSubmit}       
                />
            </React.Fragment>
        );
    }
}

export default ProductDetail; 