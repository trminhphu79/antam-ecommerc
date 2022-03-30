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
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
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
      <div className="header-top">
        <div className="wrapper header-top__wrap">
          <div className="header-connect">
            <span className="header-connect__text">Theo dõi chúng tôi:</span>
            <ul className="header-connect__list">
              <li className="header-connect__item">
                <a href="/#">
                  <CgFacebook className="header-connect__icon"></CgFacebook>
                </a>
              </li>
              <li className="header-connect__item">
                <a href="/#">
                  <SiZalo className="header-connect__icon-2"></SiZalo>
                </a>
              </li>
            </ul>
          </div>
          <a href="tel:0865328664" className="header-contact">
            <BsTelephoneFill></BsTelephoneFill>
            0865328664
          </a>
        </div>
      </div>
      <header className="header">
        <div className="wrapper header-wrap">
          <Link to="/">
            <span className="header-logo">
              <img src="/logo-chailo.png" alt="" />
              <h2>Chai Lọ An Tâm</h2>
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
                <p>{item.itemName}</p>
              </NavLink>
            ))}
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Header