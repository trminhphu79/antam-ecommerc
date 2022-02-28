import React from "react";
import { phoneNumber } from "app/page/contact";
import "./Header.scss";

export const Header = () => {

  const useState = React.useState;
  const [sticky, setSticky] = useState("");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if(scrolled > 0) {
      setSticky(" sticky");
    } else {
      setSticky("");
    }
  });

  return (
    <header className={"header" + sticky}>
      <div className="header__logo">
        <span>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_44_593)">
              <path
                d="M17.0391 51.1169C21.7419 51.1169 25.5587 47.3001 25.5587 42.5973V34.0778H17.0391C12.3363 34.0778 8.51947 37.8946 8.51947 42.5973C8.51947 47.3001 12.3363 51.1169 17.0391 51.1169Z"
                fill="#0ACF83"
              />
              <path
                d="M8.51947 25.5584C8.51947 20.8556 12.3363 17.0388 17.0391 17.0388H25.5587V34.0777H17.0391C12.3363 34.0779 8.51947 30.2611 8.51947 25.5584Z"
                fill="#A259FF"
              />
              <path
                d="M8.51947 8.51955C8.51947 3.8168 12.3363 0 17.0391 0H25.5587V17.0389H17.0391C12.3363 17.0389 8.51947 13.2223 8.51947 8.51955Z"
                fill="#F24E1E"
              />
              <path
                d="M25.5582 0H34.0778C38.7806 0 42.5974 3.8168 42.5974 8.51955C42.5974 13.2223 38.7806 17.0389 34.0778 17.0389H25.5582V0Z"
                fill="#FF7262"
              />
              <path
                d="M42.5974 25.5584C42.5974 30.2611 38.7806 34.0779 34.0778 34.0779C29.375 34.0779 25.5582 30.2611 25.5582 25.5584C25.5582 20.8556 29.375 17.0388 34.0778 17.0388C38.7806 17.0388 42.5974 20.8556 42.5974 25.5584Z"
                fill="#1ABCFE"
              />
            </g>
            <defs>
              <clipPath id="clip0_44_593">
                <rect width="51.1169" height="51.1169" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <h3 className="header__logo-name">CHAILO AN TÂM</h3>
      </div>
      <div className="header-wrapper">
        <div className="header__search">
          <input
            type="text"
            className="header__search-control"
            placeholder="Search..."
          />
          <i className="header__search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                stroke="#252D2E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
                stroke="#252D2E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
        <a href={"tel:" + phoneNumber} className="header__contact">
          <i className="header__contact-icon">
            <svg
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z"
                stroke="#252D2E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </i>
          <p className="header__contact-number">{phoneNumber}</p>
        </a>
      </div>
    </header>
  );
};
