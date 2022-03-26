import React, { Component } from "react";
import { Link , Route , Switch } from 'react-router-dom' ; 
import Modal from 'app/page/common/modal';
import Table from 'app/page/common/table' ; 
import "../styles/allProducts.scss";

const AllProducts = ({ products  , columns , products : data }) => {

  return (
    <section className="product-section">
      <Link to="/admin/tat-ca-san-pham/them-san-pham"
        className="product-btn-create">
        <i class="fal fa-plus"></i>
          Thêm</Link>
      <Table heading="Sản Phẩm" columns={columns} data={data}/>
      <Switch>
        <Route path="/admin/tat-ca-san-pham/them-san-pham" render={(props) => <Modal
        products={products} heading={"Thêm sản phẩm"} {...props}/>} />
        {/* routing to edit a product */}
        <Route path="/admin/tat-ca-san-pham/:_id" render={(props) => <Modal
        products={products} heading={"Sửa sản phẩm"} {...props}/>} />
      </Switch>
      
    </section>
  );
};

export default AllProducts;
