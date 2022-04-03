import React, { useEffect, useState } from "react";
import ListProduct from "app/page/common/listProduct/listProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "core/redux/actions/productActions";
import "./productContainer.scss";
const ProductContainer = (props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { productList } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  // const {
  //     products: allProduct,
  //     currentPage,
  //     pageSize ,
  //     itemsCount,
  //     onPageChange } = props;

  return (
    <div className="wrapper">
      <div className="product-container">
        <ListProduct products={productList} />
        {/* <Pagination
                currentPage={currentPage}
                itemsCount={itemsCount}
                onPageChange={onPageChange}
                pageSize={pageSize}
            /> */}
      </div>
    </div>
  );
};

export default ProductContainer;
