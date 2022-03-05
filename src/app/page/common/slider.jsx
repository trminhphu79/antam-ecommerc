import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../fakeServer/image-products/image-1.jpg";
import image2 from "../fakeServer/image-products/image-2.jpg";
import image3 from "../fakeServer/image-products/image-3.jpg";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
