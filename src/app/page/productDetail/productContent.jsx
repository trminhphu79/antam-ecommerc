import React, { Component } from 'react';
import image from '../fakeServer/image-temp/image.png' ; 
import _ from 'lodash' ; 

class ProductContent extends Component {

    getProductDetails = (products , id) =>{
        for( let item of products){
            if(item._id === id)
                return item 
        }; 

        return console.log('error at productContent component') ; 
    }

    render() { 
      
        const { products , id } = this.props ; 

        const product = this.getProductDetails(products , id) ; 

        return (
            <div className='row product-content' image="true">
                <div className='image col-lg-6  col-md-6 col-xs-12'>
                    <div className='wrapper'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="content col-lg-6 col-md-6 col-xs-12">
                    <div className='wrapper'>
                        <h2>{product.title}</h2>
                        <p>{product.content}</p>
                        <h4><span>{product.priceLow} - {product.priceHight}</span>vnd/1 cái - 1000 cái (Đơn hàng tối thiểu)</h4>
                        <a href="#form-section" className="btn">Nhập thông tin đặt hàng </a>
                    </div>
    
                </div>
            </div>
        );
    }
}
 
export default ProductContent;