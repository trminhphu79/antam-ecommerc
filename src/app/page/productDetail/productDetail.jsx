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
        const { match , history } = this.props ;
        const { forms } = this.state ; 
        console.log( match , history ) ; 
        return (
            <React.Fragment>
                <ProductContent 
                    match={match}
                />
                <ProductForm 
                    forms={forms} 
                    onSubmit={this.handleSubmit}
                    history={history}       
                />
            </React.Fragment>
        );
    }
}

export default ProductDetail; 