import React, { Component } from "react";
import ListProduct from "../common/listProduct";
import Pagination from "../common/pagination";
import HomeSlide from "./homeSlide" ; 
import { getProducts } from "../fakeServer/productChaillo";
import { paginate } from "../utils/paginate";
import "bootstrap/dist/css/bootstrap.css";
import "./style/home.css";

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
      <div className="background-page home-section">
        <HomeSlide />
        <div className="home-below">
          <h2>các sản phẩm nổi bật :</h2>
          <ListProduct products={products} />
          <Pagination
            itemsCount={itemsCount}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Home;
