import { first } from "lodash";
import React from "react";
import { useState, useEffect } from "react";
import { SlideContent } from "./slideContent";
import "./Slide.scss";
import { getProducts } from "app/page/fakeServer/productChaillo";

export const Slide = (props) => {
  const { products, slideSize } = props;

  const productsLength = products.length;
  const newProducts = products.filter(
    (item, index) => index >= productsLength - slideSize
  );

  const [getProduct, setGetProduct] = useState(newProducts[0]);

  useEffect(() => {
    document.querySelector("#radio1").checked = true;
    const radiosBtn = document.querySelectorAll("[name= radio-btn]");
    const timeChecked = setInterval(() => {
      const currentChecked = Array.from(radiosBtn).find(
        (item) => item.checked === true
      );
      let dataIndex = currentChecked.getAttribute("data-index");
      let indexProduct = Number(dataIndex);
      dataIndex++;
      if (dataIndex > 3) {
        dataIndex = 1;
      }
      document.querySelector("#radio" + dataIndex).checked = true;
      if (indexProduct === slideSize) {
        indexProduct = 0;
      }
      setGetProduct(newProducts[indexProduct]);
    }, 5000);

    return () => clearInterval(timeChecked);
  }, []);

  return (
    <div className="slide">
      <div className="slide__images">
        <div className="slide__images-box">
          <input type="radio" name="radio-btn" data-index={1} id="radio1" />
          <input type="radio" name="radio-btn" data-index={2} id="radio2" />
          <input type="radio" name="radio-btn" data-index={3} id="radio3" />

          {newProducts.map((item, index) => {
            return (
              <div
                key={index}
                className={"slide__image"}
                id={`slide__image${index + 1}`}
              >
                <img src={item.img} alt="" />
              </div>
            );
          })}

          <div className="slide__manual">
            {Array.from({ length: slideSize }).map((item, index) => (
              <label
                onClick={() => setGetProduct(newProducts[index])}
                key={index}
                htmlFor={`radio${index + 1}`}
                className="slide__manual-btn"
                id={`manual${index + 1}`}
              ></label>
            ))}
          </div>
        </div>
      </div>
      <SlideContent product={getProduct} />
    </div>
  );
};
