import React, { Fragment, useEffect, useState } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { listItemNavbar } from "./data/list-item-navbar";
import { useLocation } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMenu, GrFormClose } from "react-icons/gr";

const Header = () => {
  const { pathname } = useLocation();
  const [showShadow, setShowShadow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
          <ul className={`header-nav__list ${showMenu ? "is-show" : ""}`}>
            <GrFormClose
              onClick={() => setShowMenu(false)}
              className="header-menu__close"
            ></GrFormClose>
            {listItemNavbar.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="header-nav__item "
                activeClassName={item.link === pathname ? "active" : ""}
              >
                <p className="title-header">{item.itemName}</p>
              </NavLink>
            ))}
            <button className="btn header-phone">
              <a
                href="tel:0865328664"
                className="header-nav__contact animate-pulse"
              >
                <span>
                  <BsTelephoneFill className="animate-turnCircle"></BsTelephoneFill>
                </span>
                <span className="text-effect">
                  <span className="text-child">0</span>
                  <span className="text-child">8</span>
                  <span className="text-child">6</span>
                  <span className="text-child">5</span>
                  <span className="text-child">3</span>
                  <span className="text-child">2</span>
                  <span className="text-child">8</span>
                  <span className="text-child">6</span>
                  <span className="text-child">6</span>
                  <span className="text-child">4</span>
                </span>
              </a>
            </button>
          </ul>
          <GrMenu
            onClick={() => setShowMenu(!showMenu)}
            className="header-menu__btn is-show"
          ></GrMenu>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
