import React, { Component } from "react";
import Modal from 'app/page/common/modal';

const AllProducts = ({ products, onDelete, inputField, onCreate }) => {

  return (
    <div>
      <Modal
        onCreate={onCreate}
        inputField={inputField}
        products={products}
      />
      <div className="row">
        {products.map((item) => (
          <div key={item._id} className="col-xl-3 col-lg-3 col-md-4 col-xs-6">
            <div className="wrapper-item">
              <img src={item.image} alt="" />
              <div className="content">
                <h4>{item.title}</h4>
                <div>
                  <button className="btn-info">edit</button>
                  <button onClick={() => onDelete(item, 'products')} className="btn-danger">remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
