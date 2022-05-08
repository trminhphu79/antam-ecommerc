import React, { useEffect } from "react";
import ListProduct from "app/page/common/listProduct/listProduct";
import "./productContainer.scss";
import nonAccentVietnamese from "app/page/utils/convertVn";

const ProductContainer = (props) => {
  const { products: allProduct, isLoading } = props;
  return (
    <div className="wrapper">
      <div className="product-container">
        <ListProduct products={allProduct} isLoading={isLoading} />
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
