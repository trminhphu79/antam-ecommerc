import React, { Component } from "react";
import { Link , Route , Switch } from 'react-router-dom' ; 
import Modal from 'app/page/common/modal';
import "../styles/allProducts.scss";

const AllProducts = ({ products, onDelete, inputField, onCreate }) => {

  return (
    <section className="product-section">
      <Link to="/admin/all-products/create-product"
        className="modal-control btn-success"
      >
        create
      </Link>
      <div className="row">
        {products.map((item) => (
          <div key={item._id} className="col-xl-3 col-lg-3 col-md-4 col-xs-6">
            <div className="wrapper-item">
              <img src={item.image} alt="" />
              <div className="content">
                <h4>{item.title}</h4>
                <div>
                  <Link to={`/admin/all-products/${item._id}`} className="btn-info">edit</Link>
                  <button onClick={() => onDelete(item, 'products')} className="btn-danger">remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Switch>
        <Route path="/admin/all-products/create-product" render={(props) => <Modal
        onCreate={onCreate}
        inputField={inputField}
        products={products} {...props}/>} />
        <Route path="/admin/all-products/:_id" render={(props) => <Modal
        onCreate={onCreate}
        inputField={inputField}
        products={products} {...props}/>} />
      </Switch>
      
    </section>
  );
};

export default AllProducts;
