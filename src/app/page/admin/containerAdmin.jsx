import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Table from "app/page/common/table";
import ListGroup from "app/page/common/listGroup";
import AllProducts from "app/page/admin/admin-page/allProducts";
import Modal from "app/page/common/modal";
import "./styles/containerAdmin.css";

class ContainerAdmin extends Component {
  columns = {
    customer: [
      { value: "_id", label: "id" },
      { value: "name", label: "name" },
      { value: "number_phone", label: "phone" },
      { value: "address", label: "address" },
      {
        key: "123",
        content: (item) => (
          <button
            onClick={() => this.props.onDelete(item, "customers")}
            className=" btn-danger"
          >
            delete
          </button>
        ),
      },
      {
        key: "1232",
        content: (item) => <button className=" btn-info">edit</button>,
      },
    ],
    order: [
      { value: "_id", label: "id" },
      { value: "customer", label: "customer name" },
      { value: "products", label: "product name" },
      { value: "date", label: "date" },
      {
        key: "1233",
        content: (item) => (
          <button
            onClick={() => this.props.onDelete(item, "orders")}
            className=" btn-danger"
          >
            delete
          </button>
        ),
      },
      {
        key: "12232",
        content: (item) => <button className=" btn-info">edit</button>,
      },
      {
        key: " 234",
        content: (item) => <button className=" btn-primary">state</button>,
      },
    ],
  };

  inputField = [
    { name: "title", type: "text" },
    { name: "content", type: "text" },
    { name: "price", type: "number" },
  ];

  render() {
    const { customers, products, orders } = this.props;

    return (
      <main className="container">
        <div className="row">
          <div className="col-2">
            <ListGroup />
          </div>
          <div className="col">
            <Switch>
              <Route
                path="/admin/table-customer"
                render={(props) => (
                  <Table
                    columns={this.columns.customer}
                    data={customers}
                    {...props}
                  />
                )}
              />
              <Route
                path="/admin/table-order"
                render={(props) => (
                  <Table
                    columns={this.columns.order}
                    data={orders}
                    {...props}
                  />
                )}
              />
              <Route
                path="/admin/all-products"
                render={(props) => (
                  <AllProducts
                    products={products}
                    inputField={this.inputField}
                    {...props}
                    onDelete={this.props.onDelete}
                    onCreate={this.props.onCreate}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </main>
    );
  }
}

export default ContainerAdmin;
