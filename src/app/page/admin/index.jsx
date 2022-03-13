import React, { Component } from "react";
import HeaderAdmin from "./headerAdmin";
import ContainerAdmin from "./containerAdmin";
import {
  getOrders,
  getCustomers,
  getProducts,
} from "../fakeServer/productChaillo";

class Admin extends Component {
  state = {
    products: getProducts(),
    orders: getOrders(),
    customers: getCustomers(),
  };

  handleDelete = (item, label) => {
    const items = [...this.state[label]];
    const newItems = items.filter((i) => i._id !== item._id);
    switch (label) {
      case "products":
        this.setState({ products: newItems });
        break ; 
      case "orders":
        this.setState({ orders: newItems });
        break ; 
      case "customers":
        this.setState({ customers: newItems });
        break ; 
    }
  };

  handleCreate = (item) =>{
    const items = [...this.state.products] ;
    items.push(item) ; 
    this.setState({ products : items }) ; 
  }

  render() {
    const { products, orders, customers } = this.state;

    return (
      <React.Fragment>
        <ContainerAdmin
          products={products}
          orders={orders}
          customers={customers}
          onDelete={this.handleDelete}
          onCreate={this.handleCreate}
        />
      </React.Fragment>
    );
  }
}

export default Admin;
