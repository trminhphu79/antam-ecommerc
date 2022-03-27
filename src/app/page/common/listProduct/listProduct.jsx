import React from "react";
import { Link } from "react-router-dom";
import "./listProduct.scss";

const ListProduct = ({ products }) => {
  return (
    <div className="row">
      {products.map((item) => (
        <div
          key={item._id}
          className="product-item col-xl-2 col-lg-4 col-md-4 col-xs-6"
        >
          <div className="wrapper-item">
            <img src={item.img} alt="" />
            <div className="content">
              <h4>{item.title}</h4>
              <div>
                <span>Giá sỉ liên hệ:</span>
                <p>0865.328.664</p>
              </div>
              <Link to={`/san-pham/${item._id}`} className="btn">
                Chi tiết sản phẩm
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
