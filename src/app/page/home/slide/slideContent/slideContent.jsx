import React from "react";
import "./slideContent.scss";
import { icons } from "assets/icons/icons-svg";

export const SlideContent = ({ product }) => {
  return (
    <div className="slide-content">
      <h1 className="slide-content__title">{product.title}</h1>
      <p className="slide-content__desc">{product.content}</p>
      <button className="slide-content__btn">
          Xem chi tiết
          <i className="slide-content__btn-icon">{icons.iconArrowNext}</i>
      </button>
    </div>
)};
