import React from 'react';
import image from '../fakeServer/image-temp/image.png' ; 

const ListProduct = ({ products }) => {

    return (
        <div className="row">
            {
                products.map(item =>(
                    <div key={item._id} className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
                        <div className='wrapper-item'>
                            <img src={image} alt="" />
                            <div className="content">
                                <h4>{item.title}</h4>
                                <div>
                                    <span>{item.priceLow} - {item.priceHight}</span>
                                    <p>VND/1 Cái</p>
                                </div>
                                <button className="btn">chi tiết đặt hàng</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    )
}

export default ListProduct;
