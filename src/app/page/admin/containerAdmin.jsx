import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { icons } from "assets/icons/icons-svg";
import Table from "app/page/common/table";
import ListGroup from "app/page/common/listGroup";
import AllProducts from "app/page/admin/admin-page/allProducts";
import Delete from "../common/delete";
import NotFound from "../notFound/NotFound";
import "./styles/containerAdmin.scss";
import TableOrder from "../common/tableOrder";
import Category from './admin-page/category/Category'
import { Redirect } from "react-router-dom";
class ContainerAdmin extends Component {
  columns = {
    order: [
      { value: "customer", label: "Tên khách hàng" },
      { value: "products", label: "Sản phẩm" },
      { value: "quantity", label: "Số lượng" },
      { value: "date", label: "Ngày gửi" },
      { value: "action", label: "Thao tác" },
    ],
    allProducts: [
      { value: "title", label: "Tên sản phẩm" },
      { value: "content", label: "Mô tả sản phẩm" },
      { value: "url", label: "Hình ảnh" },
      { value: "action", label: "Thao tác" },
    ],
  };

  render() {
    const { products, orders, isLoading } = this.props;

    return (
      <main className="container container-admin">
        <ListGroup />
        <Switch>
          <Route
            path="/admin/don-hang"
            render={(props) => (
              <TableOrder
                heading={"Đơn Hàng"}
                columns={this.columns.order}
                data={orders}
                isLoading={isLoading}
                {...props}
              />
            )}
          />
          <Route path="/admin/phan-loai-san-pham" render={(props) => (
            <Category />
          )} />
          <Route
            path="/admin/tat-ca-san-pham"
            render={(props) => (
              <AllProducts
                products={products}
                columns={this.columns.allProducts}
                onDelete={this.props.onDelete}
                {...props}
              />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default ContainerAdmin;
