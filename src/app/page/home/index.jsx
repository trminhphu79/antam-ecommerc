import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SwiperProduct from "../common/listProduct/swiper-product/swiperProduct";
import NewSlide from "./new-slide/NewSlide";
import { getListWithCustomField } from "app/const/firebase"
import "./Home.scss";
import { useDispatch } from "react-redux";
import { getCategoryAction } from "core/redux/actions/categoryActions";

function Home() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const { categoryList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategoryAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    categoryList.forEach((item) => {
      getListWithCustomField(
        "product",
        "categoryId",
        item.id
      )
        .then((res) => {
          item.products = res
        })
        .catch((err) => console.log(err))
    });
  }, [])


  return (
    <Fragment>
      <div className="wrapper content-wrapper">
        <NewSlide></NewSlide>

        {categoryList ? (categoryList.map((item, index) => (
          <SwiperProduct data={item} key={index} />
        ))) : ""}
      </div>
    </Fragment>
  );
}

export default Home;
