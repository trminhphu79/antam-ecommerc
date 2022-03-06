import React, { Component } from "react";
import ListProduct from "../common/listProduct";
import Pagination from "../common/pagination/pagination";
import { getProducts } from "../fakeServer/productChaillo";
import { paginate } from "../utils/paginate";
import { Slide } from "./slide";
import "./Home.scss";

class Home extends Component {
  state = {
    products: getProducts(),
    currentPage: 1,
    pageSize: 8,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { products: allProduct, currentPage, pageSize } = this.state;
    const { length: itemsCount } = allProduct;

    const products = paginate(allProduct, currentPage, pageSize);

    return (
      <div className="background-page home-below">
        <Slide 
            products={allProduct} 
            slideSize={3}
        />
        <h2>các sản phẩm nổi bật</h2>
        <ListProduct products={products} />
        <Pagination
          itemsCount={itemsCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;
