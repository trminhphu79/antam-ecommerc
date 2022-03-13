import React, { Component, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Table from "app/page/common/table";
import ListGroup from "app/page/common/listGroup";
import AllProducts from "app/page/admin/admin-page/allProducts";
import { icons } from "assets/icons/icons-svg";
import { Toasts } from "../common/toasts/toasts";
import "./styles/containerAdmin.scss";

class ContainerAdmin extends Component {
  columns = {
    order: [
      { value: "_id", label: "id" },
      { value: "customer", label: "customer name" },
      { value: "products", label: "product name" },
      { value: "date", label: "date" },
      { value: "state", label: "state" },
      {
        key: "1233",
        content: (item) => (
          <div
            onClick={() => {
              return this.props.onDelete(item, "orders");
            }}
            className=" btn-delete"
          >
            {icons.iconDelete}
          </div>
        ),
      },
      {
        key: "12232",
        content: (item) => <div className=" btn-edit">{icons.iconEdit}</div>,
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
      <main className="container container-admin">
        <ListGroup />
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
                heading={"Đơn Hàng"}
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
      </main>
    );
  }
}

export default ContainerAdmin;
