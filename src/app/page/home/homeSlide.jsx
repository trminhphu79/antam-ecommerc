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
          <h2>Lancome Glass Dòng Mỹ Phẩm Chai Và Lọ Kem</h2>
          <p>
          Lancome Glass Dòng Mỹ Phẩm MD Pore Therapy 148ml là dòng toner cao cấp dưỡng da, sản phẩm đến từ thương hiệu Obagi nổi tiếng của Mỹ. Toner BHA Obagi 148ml hỗ trợ làm sạch sâu, hỗ trợ thu nhỏ lỗ chân lông, hỗ trợ da khỏe mạnh và rạng rỡ hơn.
          </p>
          <button className="btn">Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
