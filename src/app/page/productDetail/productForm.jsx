import React, { Component } from 'react';
import Form from './form';
import { getValue } from '../utils/getFormValue' ; 
import image from '../fakeServer/image-temp/image.png';

class ProductForm extends Component {

    raiseFormValue = () => {    
        const values = getValue() ; 
        this.props.onSubmit(values) ; 
        this.props.history.replace('/') ; 
    }

    render() {
        const { forms, onSubmit } = this.props;

        return (
            <div id="form-section">
                <div className='row product-form'>
                    <Form forms={forms} onSubmit={onSubmit} />
                    <div className="image col-lg-6 col-md-6 col-xs-12">
                        <div className="wrapper">
                            <img src={image} alt="" />
                            <button
                                className="btn"
                                onClick={this.raiseFormValue}
                            >đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default ProductForm;
