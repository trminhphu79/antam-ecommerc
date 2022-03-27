import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerAdmin from "./containerAdmin";

import {
  deleteProductAction,
  getAllProductAction,
} from "core/redux/actions/productActions";
import { getAllOrderAction } from "core/redux/actions/userActions";

function Admin() {
  const dispatch = useDispatch();
  const [customers, setCustomers] = useState([]);
  const { productList } = useSelector((state) => state.product);
  const { orderList } = useSelector((state) => state.user);

  // Loading api lần đầu tiên vào trang admin
  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getAllOrderAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("orderList", orderList);

  return (
    <ContainerAdmin
      products={productList}
      orders={orderList}
      customers={customers}
    />
  );
}

export default Admin;
