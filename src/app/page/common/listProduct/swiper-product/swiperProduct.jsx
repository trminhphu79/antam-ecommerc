import Loading from "app/components/loading";
import { getAllProductAction } from "core/redux/actions/productActions";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./swiperProduct.scss";
import { SwiperSlide, Swiper } from "swiper/react/swiper-react";

const SwiperProduct = (props) => {
  const { title, type } = props;
  const { productList, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <h2 className="product-title">{title}</h2>
      <div className="product-home__list">
        <Swiper
          spaceBetween={12}
          grabCursor={"true"}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="product-home__wrap"
        >
          {productList.map((item) => {
            return (
              <SwiperSlide className="product product-home" key={item.id}>
                <Link to={`/san-pham/${item.id}`}>
                  <div className="">
                    <div
                      className="product-item product-home__item"
                      key={item.id}
                    >
                      <img src={item.img} alt="" className="product-img" />
                      <div className="product-body">
                        <h4 className="product-name">{item.title}</h4>
                        <p className="product-price">Giá sỉ liên hệ</p>
                        <p className="product-phone">0865328664</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
          {/* <section className="product">
                    <h2 className="product-title">{title}</h2>
                    <div className="product-list">
                        {productList.length > 0 &&
                            productList.map((item) => (
                                <Link
                                    to={`/san-pham/${item.id}`}
                                    className="product-item"
                                    key={item.id}
                                >
                                    <img src={item.img} alt="" className="product-img" />
                                    <div className="product-body">
                                        <h4 className="product-name">{item.title}</h4>
                                        <p className="product-price">Giá sỉ liên hệ</p>
                                        <p className="product-phone">0865328664</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section> */}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default SwiperProduct;
