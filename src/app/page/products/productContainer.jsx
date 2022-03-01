import React from 'react' ; 
import ListProduct from './listProduct';

const ProductContainer = ({ products }) => {

    return ( 
        <div className="product-container">
            <ListProduct products={products}/>
        </div>
     );
}
 
export default ProductContainer;