import React from 'react';
import { Link } from 'react-router-dom';
import image from '../fakeServer/image-temp/image.png';
import "./styles/listProduct.css" ; 

const ListProduct = ({ products }) => {

    return (
            <div className="row list-product">
                {
                    products.map(item => (
                        <div key={item._id} className="col-xl-3 col-lg-4 col-md-4 col-xs-4">
                            <div className='wrapper-item'>
                                <img src={image} alt="" />
                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <div>
                                        <span>{item.priceLow} - {item.priceHight}</span>
                                        <p>VND/1 Cái</p>
                                    </div>
                                    <Link to={`/product/${item._id}`} className="btn">chi tiết sản phẩm</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}

export default ListProduct;
