import React from 'react';
import Form from './form';
import image from './image-temp/image.png' ; 


const ProductForm = ({forms}) => {
   
    return (
        <div id="form-section">
            <div className='row product-form'>
                <Form forms={forms}/>
                <div className="image col-lg-6 col-md-6 col-xs-12">
                    <div className="wrapper">
                        <img src={image} alt="" />
                        <button className="btn">đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
export default ProductForm;