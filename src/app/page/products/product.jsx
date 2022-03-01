import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './filter' ; 
import ProductContainer from './productContainer';
import './style/product.css' ; 
import { getProducts } from '../fakeServer/productChaillo';
import { paginate } from '../utils/paginate' ; 

class Products extends Component {
    state = {
        products : getProducts(), 
        pageSize : 8 , 
        currentPage : 1 , 
    }

    handlePageChange = (page) => {
        this.setState({ currentPage : page }) ; 
    }

    render() { 
        const { products , currentPage , pageSize} = this.state ;
        const { length : itemsCount } = products ; 

        const allProduct = paginate(products,currentPage,pageSize) ;
        
        return (
            <div className="product">
                <Filter />
                <ProductContainer 
                    products={allProduct}
                    itemsCount={itemsCount}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );
    }
}
 
export default Products;