import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerAdmin from "./containerAdmin";

import { getAllProductAction } from "core/redux/actions/productActions";

function Admin() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const { productList } = useSelector((state) => state.product);

  // const handleDelete = (item, label) => {
  //   const items = [...this.state[label]];
  //   const newItems = items.filter((i) => i._id !== item._id);

  //   switch (label) {
  //     case "products":
  //       this.setState({ products: newItems });
  //       break;
  //     case "orders":
  //       this.setState({ orders: newItems });

  //       break;
  //     default: {
  //       throw new Error("This case is not valid!!!")
  //     }

  //   }
  // };

  // Loading api lần đầu tiên vào trang admin
  useEffect(() => {
    dispatch(getAllProductAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("producList", productList);
  }, [productList]);

  return (
    <ContainerAdmin
      products={productList}
      orders={orders}
      customers={customers}
      // onDelete={() => {}}
    />
  );
}

export default Admin;
