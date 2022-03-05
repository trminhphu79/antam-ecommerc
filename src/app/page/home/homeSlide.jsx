import React from "react";
import image from "../fakeServer/image-temp/image.png";

const HomeSlide = () => {
  return (
    <div className="home-slide row">
      <div id="image" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <div className="wrapper-item">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={image} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={image} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={image} alt="Third slide" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
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
