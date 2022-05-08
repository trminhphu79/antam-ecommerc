import React, { useEffect } from "react";
import ListProduct from "app/page/common/listProduct/listProduct";
import "./productContainer.scss";
import nonAccentVietnamese from "app/page/utils/convertVn";

const ProductContainer = (props) => {
  const { products: allProduct, isLoading } = props;
  let newListProduct = [];

  useEffect(() => {
    allProduct.forEach((item)=>{
      let urlTitle = nonAccentVietnamese(item.title)
      item.urlTitle = urlTitle
      newListProduct.push(item);
    })

    console.log(newListProduct)
    // console.log("newListProduct:",newListProduct);
  }, []);

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
