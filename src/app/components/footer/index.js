/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import imageBCT from "../../../assets/images/cobongthuong_chailo.png";
import { Link } from "react-router-dom";
import "./footer.scss";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import Copyright from "./Copyright";
import { useSelector } from "react-redux";
export const Footer = () => {
  const { categoryList, isLoading } = useSelector((state) => state.category);
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-item">
            <h3 className="footer-title">Liên hệ</h3>
            <p className="footer-text">
              <HiLocationMarker></HiLocationMarker>
              B1/9 đường liên ấp 2-6 xã Vĩnh Lộc A huyện Bình Chánh thành phố Hồ
              Chí Minh
            </p>
            <p className="footer-text">
              <BsTelephoneFill></BsTelephoneFill>
              Hotline : <a href="tel:0388886901">038.8886.901</a>
            </p>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">Sản phẩm</h3>
            <ul>
              <li>
                <Link to="/phan-loai/chai-lo-hu-nhua">
                  <span> Chai lọ hủ nhựa</span>
                </Link>
              </li>
              <li>
                <Link to="/phan-loai/chai-lo-my-pham">
                  <span> Chai lọ mỹ phẩm</span>
                </Link>
              </li>
              <li>
                <Link to="/phan-loai/dat-hang-ve-nhanh-gia-tot">
                  <span> Đặt hàng về nhanh giá tốt </span>
                </Link>
              </li>
              <li>
                <Link to="/phan-loai/duoc-thuc-pham">
                  <span> Dược thực phẩm</span>
                </Link>
              </li>
              <li>
                <Link to="/phan-loai/in-an-thiet-ke-theo-yeu-cau">
                  <span> In ấn thiết kế theo yêu cầu</span>
                </Link>
              </li>
              <li>
                <Link to="/phan-loai/thiet-ke-hop-giay-theo-yeu-cau">
                  <span> Thiết kế hộp giấy theo yêu cầu</span>
                </Link>
              </li>
              <li>
                <Link to="/lien-he">
                  <span> Liên hệ</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">Theo dõi chúng tôi trên</h3>
            <div className="footer-social">
              <a href="https://www.facebook.com/chailoantam" target="_blank">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                    fill="#0d62d1"
                  ></path>
                  <path
                    d="M27.7852 25.7812L28.6719 20H23.125V16.25C23.125 14.668 23.8984 13.125 26.3828 13.125H28.9062V8.20312C28.9062 8.20312 26.6172 7.8125 24.4297 7.8125C19.8594 7.8125 16.875 10.582 16.875 15.5938V20H11.7969V25.7812H16.875V39.7578C17.8945 39.918 18.9375 40 20 40C21.0625 40 22.1055 39.918 23.125 39.7578V25.7812H27.7852Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a href="https://chat.zalo.me/?phone=0388886901" target="_blank">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                    fill="#1877F2"
                  ></path>
                  <path
                    d="M5.83384 13.9763C6.61784 13.9763 7.3548 13.9706 8.08727 13.9763C8.49719 13.982 8.72007 14.1562 8.76263 14.4886C8.80967 14.9052 8.57111 15.1852 8.12424 15.1897C7.28312 15.2 6.4476 15.1954 5.60648 15.1954C5.36232 15.1954 5.12376 15.2057 4.87961 15.1897C4.57833 15.1738 4.28265 15.1101 4.13705 14.7936C3.99145 14.4772 4.09561 14.1926 4.29273 13.9331C5.0924 12.8995 5.89656 11.8591 6.70184 10.8256C6.74888 10.7618 6.7948 10.6992 6.84184 10.6412C6.79032 10.5512 6.71752 10.5934 6.6548 10.5888C6.09368 10.5831 5.52808 10.5888 4.96808 10.5831C4.83816 10.5831 4.70825 10.5672 4.58393 10.541C4.28825 10.4727 4.10681 10.1722 4.17401 9.87624C4.22105 9.67591 4.37673 9.51199 4.57385 9.46419C4.69817 9.43231 4.82809 9.41638 4.958 9.41638C5.882 9.41069 6.8116 9.41069 7.7356 9.41638C7.90136 9.41069 8.06264 9.43231 8.22392 9.47443C8.57671 9.59623 8.72791 9.92861 8.58679 10.2769C8.46247 10.5774 8.26536 10.8358 8.06712 11.0942C7.38728 11.9752 6.70744 12.8506 6.02648 13.7214C5.96824 13.7919 5.91672 13.8602 5.83384 13.9763Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.9195 11.0495C12.0438 10.8856 12.1737 10.733 12.3865 10.6909C12.7965 10.6067 13.1806 10.8753 13.1862 11.2976C13.2019 12.3528 13.1963 13.408 13.1862 14.4632C13.1862 14.7375 13.0093 14.98 12.755 15.0597C12.4952 15.1598 12.1995 15.0813 12.0281 14.8536C11.9397 14.7432 11.9038 14.7216 11.7795 14.8218C11.3069 15.2122 10.7726 15.2805 10.1958 15.0904C9.27184 14.7842 8.89328 14.0511 8.78912 13.1599C8.68048 12.1946 8.99632 11.3716 9.84863 10.8651C10.5542 10.4382 11.2699 10.4746 11.9195 11.0495ZM10.0816 12.9755C10.0917 13.2077 10.1645 13.4296 10.3 13.614C10.58 13.9942 11.1153 14.0728 11.4939 13.7882C11.5566 13.7404 11.6137 13.6823 11.6653 13.614C11.9565 13.2134 11.9565 12.5531 11.6653 12.1525C11.5197 11.9464 11.2912 11.8258 11.047 11.8201C10.4758 11.7837 10.076 12.2322 10.0816 12.9755ZM15.5169 13.0073C15.4755 11.6516 16.3524 10.6386 17.599 10.601C18.9228 10.5589 19.8883 11.4615 19.9297 12.7797C19.9711 14.1149 19.167 15.0585 17.926 15.186C16.5708 15.3237 15.4956 14.3266 15.5169 13.0073ZM16.8195 12.881C16.8094 13.1451 16.8867 13.4034 17.0424 13.6197C17.328 13.9999 17.8622 14.0739 18.2363 13.7779C18.2934 13.7358 18.3404 13.6835 18.3863 13.63C18.6876 13.2293 18.6876 12.5531 18.3919 12.1525C18.2463 11.9521 18.0179 11.8258 17.7737 11.8201C17.2148 11.7882 16.8195 12.2208 16.8195 12.881ZM15.06 11.9578C15.06 12.7751 15.0656 13.5935 15.06 14.4108C15.0656 14.7853 14.7744 15.0972 14.4059 15.1075C14.3432 15.1075 14.276 15.1018 14.2132 15.0858C13.9534 15.0175 13.7563 14.7375 13.7563 14.4051V10.2106C13.7563 9.96241 13.7507 9.71996 13.7563 9.47181C13.7619 9.06544 14.0161 8.80136 14.4003 8.80136C14.7945 8.79567 15.06 9.05975 15.06 9.48205C15.0656 10.3062 15.06 11.1348 15.06 11.9578Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
            <h3 className="footer-title footer-title-2">Chứng nhận bởi</h3>
            <img
              src={imageBCT}
              alt="Chứng nhận bộ công thương"
              className="footer-img"
            />
          </div>
        </div>
        <Copyright></Copyright>
      </div>
    </footer>
  );
};
