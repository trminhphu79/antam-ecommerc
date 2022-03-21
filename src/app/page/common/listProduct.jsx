import React from "react";
import { Link } from "react-router-dom";
import "./styles/listProduct.css";

const ListProduct = ({ products }) => {
  return (
    <div className="row list-product">
      {products.map((item) => (
        <div key={item._id} className="col-xl-3 col-lg-4 col-md-4 col-xs-4">
          <div className="wrapper-item">
            <img src={item.image} alt="" />
            <div className="content">
              <h4>{item.title}</h4>
              <Link to={`/product/${item._id}`} className="btn">
                chi tiết sản phẩm
              </Link>
              {/* <div class='contact-phone'>
                <span>Liên hệ số điện thoại:</span>
                <p>0865.328.664</p>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
