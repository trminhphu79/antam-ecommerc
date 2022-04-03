import ListProduct from "../common/listProduct/listProduct";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "core/redux/actions/productActions";
import NewSlide from "./new-slide/NewSlide";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { productList } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  // const hotProducts = [1];
  // const productsLength = allProduct.length;
  // const hotProducts = allProduct.filter((product, index) =>
  //   index >= productsLength - pageSize
  // )

  return (
    <Fragment>
      <div className="wrapper content-wrapper">
        {/* <Slide products={productList} slideSize={3} /> */}
        <NewSlide></NewSlide>

        <ListProduct products={productList} title="Sản phẩm nổi bật" />
      </div>
    </Fragment>
  );
}

export default Home;
