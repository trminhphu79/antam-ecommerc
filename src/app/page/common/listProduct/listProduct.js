import Loading from "app/components/loading";
import { getAllProductAction } from "core/redux/actions/productActions";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./listProduct.scss";

const ListProduct = ({ products }) => {
  const { productList, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* // <div className="row">
    //   {loading ? (
    //     <div>
    //       <Loading />
    //     </div>
    //   ) : (
    //     <>
    //       {productList?.map((item) => (
    //         <div
    //           key={item.id}
    //           className="product-item col-xl-2 col-lg-4 col-md-4 col-xs-12"
    //         >
    //           <div className="wrapper-item">
    //             <img src={item.img[0]} alt="" />

    //             <div className="content">
    //               <div className="header-product">
    //                 <h4>{item.title}</h4>
    //               </div>
    //               <div className="footer-product">
    //                 <div>
    //                   <span>Giá sỉ liên hệ:</span>
    //                   <p>0865.328.664</p>
    //                 </div>
    //                 <Link to={`/san-pham/${item.id}`} className="btn">
    //                   Chi tiết sản phẩm
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </>
    //   )}
    // </div> */}
      <section className="product">
        <h2 className="product-title">sản phẩm nổi bật</h2>

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
                <div className="product-more">
                  <span>Xem chi tiết</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </Fragment>
  );
};

export default ListProduct;
