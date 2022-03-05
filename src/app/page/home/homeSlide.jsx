import React from "react";
import Slider from "../common/slider" ; 

const HomeSlide = () => {
  return (
    <div className="home-slide row">
      <div id="image" className="col-xl-5 col-lg-5 col-md-12 col-xs-12">
        <div className="wrapper-item">
          <Slider />
        </div>
      </div>
      <div id="content" className="col-xl-6 col-lg-6 col-md-12 col-xs-12">
        <div className="wrapper-item">
          <h2>chailo title acid</h2>
          <p>
            content of chailo ...bla bla ...Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
          <button className="btn">Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
