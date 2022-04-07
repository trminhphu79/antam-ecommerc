import ListProduct from "../common/listProduct/listProduct";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "core/redux/actions/productActions";
import SwiperProduct from "../common/listProduct/swiper-product/swiperProduct";
import NewSlide from "./new-slide/NewSlide";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const title = "Hũ Mỹ Phẩm";
  let objCategories = [
    {
      title: "Hủ mỹ phẩm",
      type: "cosmetic-jars",
    },
    {
      title: "Chai lọ mỹ phẩm",
      type: "cosmetic-bottles",
    },
    {
      title: "Chai nhựa pet",
      type: "cosmetic-pets",
    },
    {
      title: "In ấn chai lọ mỹ phẩm",
      type: "cosmetic-printings",
    },
    {
      title: "Vỏ hộp mỹ phẩm",
      type: "cosmetic-boxs",
    },
  ];
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
        {objCategories.map((item, index) => (
          <SwiperProduct title={item.title} type={item.type} key={index} />
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
