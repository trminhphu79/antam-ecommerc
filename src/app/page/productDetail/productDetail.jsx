import React, { Component } from "react";
import ProductContent from "./productContent";
import ProductForm from "./productForm";
import { getForms } from "../server/productChaillo";
import "./style/productDetail.css";

class ProductDetail extends Component {
  state = {
    forms: [],
  };

  componentDidMount() {
    this.setState({
      forms: getForms(),
    });
  }

  render() {
    const { forms } = this.state;

    return (
      <React.Fragment>
        <div className="background-page product-detail">
          <ProductContent />
          <ProductForm forms={forms} />
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetail;
