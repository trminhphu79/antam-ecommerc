import React, { Fragment, useEffect, useState } from "react";
import "./Header.scss";
import { NavLink ,Link} from "react-router-dom";
import { listItemNavbar } from "./data/list-item-navbar";
import { useLocation } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { SiZalo } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";

const Header = () => {
  const { pathname } = useLocation();
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //  Logic scroll show background header */
  // const [sticky, setSticky] = useState("");
  // window.addEventListener("scroll", () => {
  //   const scrolled = window.scrollY;
  //   if (scrolled > 0) {
  //     setSticky(" sticky");
  //   } else {
  //     setSticky("");
  //   }
  // });

  /* Logic toggle SearchBar */
  // const [open, setOpen] = useState("");

  // const HandleSearchBar = () => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth < 740) {
  //     if (open === "") {
  //       setOpen(" open");
  //     } else {
  //       setOpen("");
  //     }
  //   }
  // };

  return (
    <Fragment>
      <header className={`header ${showShadow ? "is-show" : ""}`}>
        <div className="wrapper header-wrap">
          <Link to="/">
            <span className="header-logo">
              <img src="/logo-chailo.png" alt="" />
              {/* <h2>Chai Lọ An Tâm</h2> */}
            </span>
          </Link>
          <ul className="header-nav__list">
            {listItemNavbar.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="header-nav__item header-item"
                activeClassName={item.link === pathname ? "active" : ""}
              >
                <p class='title-header'>{item.itemName}</p>
              </NavLink>
            ))}
            <button className="btn">
              <a
                href="tel:0865328664"
                className="header-nav__contact animate-pulse"
              >
                <span>
                  <BsTelephoneFill className="animate-turnCircle"></BsTelephoneFill>
                </span>
                <span>0865328664</span>
              </a>
            </button>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Header