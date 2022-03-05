import { first } from "lodash";
import React from "react";
import { useState, useEffect } from "react";
import "./Slide.scss";

export const Slide = (props) => {
  const { products, productsSize } = props;

  const productsLength = products.length;
  const slideProducts = products.filter(
    (item, index) => index >= productsLength - productsSize
  );

  useEffect(() => {
    document.querySelector('#radio1').checked = true;
    const radiosBtn = document.querySelectorAll('[name= radio-btn]');
    const timeChecked = setInterval(()=> {
      const currentChecked = Array.from(radiosBtn).find(item => item.checked === true);
      let dataIndex = currentChecked.getAttribute('data-index');
      dataIndex++;
      if(dataIndex > 3) {
        dataIndex = 1
      }
      document.querySelector('#radio' + dataIndex).checked = true;
    }, 5000)

    return () => clearInterval(timeChecked);
  }, [])

  return (
    <div className="slide">
      <div className="slide__images">
        <div className="slide__images-wrapper">
          <div className="slide__images-slides">
            <input type="radio" name="radio-btn" data-index={1} id="radio1" />
            <input type="radio" name="radio-btn" data-index={2} id="radio2" />
            <input type="radio" name="radio-btn" data-index={3} id="radio3" />

            {slideProducts.map((item, index) => {
              let first;
              if (index === 0) {
                first = " first";
              } else {
                first = "";
              }
              return (
                <div key={index} className={"slide__image" + first}>
                  <img src={item.img} alt="" />
                </div>
              );
            })}

            <div className="slide__manual">
              <label
                htmlFor="radio1"
                className="slide__manual-btn"
                id="manual1"
              ></label>
              <label
                htmlFor="radio2"
                className="slide__manual-btn"
                id="manual2"
              ></label>
              <label
                htmlFor="radio3"
                className="slide__manual-btn"
                id="manual3"
              ></label>
            </div>
          </div>
        </div>
      </div>
      <div className="slide__content"></div>
    </div>
  );
};
