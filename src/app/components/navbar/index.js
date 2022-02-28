import React from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link to={"/"} className="navbar__item active">
          <i className="navbar__item-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18V15"
                stroke="#252D2E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.07 2.81997L3.14 8.36997C2.36 8.98997 1.86 10.3 2.03 11.28L3.36 19.24C3.6 20.66 4.96 21.81 6.4 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                stroke="#252D2E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <p className="navbar__item-name">Trang chủ</p>
        </Link>
        <Link to={"/san-pham"} className="navbar__item">
          <i className="navbar__item-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.17334 1.94663L13.1067 3.6933C14.24 4.1933 14.24 5.01996 13.1067 5.51996L9.17334 7.26663C8.72667 7.46663 7.99334 7.46663 7.54667 7.26663L3.61334 5.51996C2.48 5.01996 2.48 4.1933 3.61334 3.6933L7.54667 1.94663C7.99334 1.74663 8.72667 1.74663 9.17334 1.94663Z"
                stroke="#252D2E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 7.33325C2.5 7.89325 2.92 8.53992 3.43333 8.76659L7.96 10.7799C8.30667 10.9333 8.7 10.9333 9.04 10.7799L13.5667 8.76659C14.08 8.53992 14.5 7.89325 14.5 7.33325"
                stroke="#252D2E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 10.6667C2.5 11.2867 2.86667 11.8467 3.43333 12.1001L7.96 14.1134C8.30667 14.2667 8.7 14.2667 9.04 14.1134L13.5667 12.1001C14.1333 11.8467 14.5 11.2867 14.5 10.6667"
                stroke="#252D2E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <p className="navbar__item-name">Sản phẩm</p>
        </Link>
        <Link to={"/lien-he"} className="navbar__item">
          <i className="navbar__item-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.14 21.62C17.26 21.88 16.22 22 15 22H9C7.78 22 6.74 21.88 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62Z"
                stroke="#252D2E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
                stroke="#252D2E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <p className="navbar__item-name">Liên hệ</p>
        </Link>
      </ul>
    </nav>
  );
};
