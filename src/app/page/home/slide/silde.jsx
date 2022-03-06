import { first } from "lodash";
import React from "react";
import { useState, useEffect } from "react";
import { SlideContent } from "./slideContent/slideContent";
import { SlideImages } from "./slideImages/slideImages";
import "./Slide.scss";

export const Slide = (props) => {
  const { products, slideSize } = props;

  const productsLength = products.length;

  // get New Products equal slide size
  const newProducts = products.filter(
    (item, index) => index >= productsLength - slideSize
  );

  const [getProduct, setGetProduct] = useState(newProducts[0]);

  useEffect(() => {
    // set first slide
    document.querySelector("#radio1").checked = true;

    const radiosBtn = document.querySelectorAll("[name= radio-btn]");
    const timeSlide = setInterval(() => {
      // get current slide
      const getCurrentSlide = Array.from(radiosBtn).find(
        (item) => item.checked === true
      );
      let dataIndex = Number(getCurrentSlide.getAttribute("data-index"));
      let indexProduct = dataIndex;
      dataIndex++;
      if (dataIndex > 3) {
        dataIndex = 1;
      }
      // next slide
      document.querySelector("#radio" + dataIndex).checked = true;

      if (indexProduct === slideSize) {
        indexProduct = 0;
      }
      setGetProduct(newProducts[indexProduct]);
    }, 5000);

    return () => clearInterval(timeSlide);
  }, []);

  // get current product of products slide when manual btn click
  const checkedManualBtn = (index) => {
    setGetProduct(newProducts[index]);
  };

  return (
    <div className="slide">
      <SlideImages
        products={newProducts}
        manualSize={slideSize}
        onClick={checkedManualBtn}
      />
      <SlideContent product={getProduct} />
    </div>
  );
};
