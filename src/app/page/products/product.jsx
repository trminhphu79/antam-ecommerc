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
        sortProduct : { path : 'priceHight' , order : 'asc' },
        selectedBtn : true ,
    }

    buttons = {
        priceAsc : {
            name: 'price-asc' , 
            path : 'priceHight' , 
        },
        priceDesc : {
            name: 'price-desc' , 
            path : 'priceHight' , 
        },
        titleAsc : {
            name: 'title-asc' , 
            path : 'title' , 
        },
        titleDesc : {
            name: 'title-desc' , 
            path : 'title' ,
        },
        
    }

    handlePageChange = (page) => {
        this.setState({ currentPage : page }) ; 
    }

    handleSortProduct = (path) =>{

    }

    render() { 
        const { products , currentPage , pageSize , sortProduct} = this.state ;
        const { length : itemsCount } = products ; 

        const allProduct = paginate(products,currentPage,pageSize) ;
        
        return (
            <div className="product">
                <Filter 
                    sortProduct={sortProduct}
                    buttons={this.buttons}
                />
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