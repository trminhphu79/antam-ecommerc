import React from "react";
import imageBCT from "../../../assets/images/cobongthuong_chailo.png";
import "./footer.scss";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="fotter-content">
          <div className="footer-item">
            <h3 className="footer-item__title">Liên hệ</h3>
            <p className="footer-item__text">
              <HiLocationMarker></HiLocationMarker>
              B1/9 đường liên ấp 2-6 xã Vĩnh Lộc A huyện Bình Chánh thành phố Hồ
              Chí Minh
            </p>
            <p className="footer-item__text">
              <BsTelephoneFill></BsTelephoneFill>
              Hotline : <a href="tel:0865328664">0865.328.664</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
