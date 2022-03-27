import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerAdmin from "./containerAdmin";

import {
  deleteProductAction,
  getAllProductAction,
} from "core/redux/actions/productActions";

function Admin() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const { productList } = useSelector((state) => state.product);

  // Loading api lần đầu tiên vào trang admin
  useEffect(() => {
    dispatch(getAllProductAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerAdmin
      products={productList}
      orders={orders}
      customers={customers}
    />
  );
}

export default Admin;
