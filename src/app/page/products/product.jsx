import React, { Component } from 'react';
import Filter from './filter' ; 
import ProductContainer from './productContainer';
import './style/product.css' ; 
import { getProducts } from '../server/productChaillo';

class Products extends Component {
    state = { 
        products : getProducts()
    }

    render() { 
        const { products } = this.state ;
        return (
            <div className="background-page product">
                <Filter />
                <ProductContainer products={products}/>
            </div>
        );
    }
}
 
export default Products;