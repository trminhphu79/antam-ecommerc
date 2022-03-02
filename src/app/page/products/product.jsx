import React, { Component } from "react";
import Filter from "./filter";
import ProductContainer from "./productContainer";
import "./style/product.css";
import { getProducts } from "../server/productChaillo";
import { paginate } from "../common/pagination/paginate/paginate";

class Products extends Component {
  state = {
    products: getProducts(),
    pageSize: 8,
    currentPage: 1,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { products, currentPage, pageSize, sortProduct } = this.state;
    const { length: itemsCount } = products;

    const allProduct = paginate(products, currentPage, pageSize);
    return (
      <div className="background-page product">
        <Filter />
        <ProductContainer
          products={allProduct}
          itemsCount={itemsCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Products;
