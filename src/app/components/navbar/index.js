import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listItemNavbar } from "./data/list-item-navbar";
import "./Navbar.scss";

export const Navbar = () => {
  const localPathName = window.location.pathname;

  /* Logic active navbar item */
  const [active, setActive] = useState(localPathName);

  const CurrentActive = (pathLink) => {
    if (active === pathLink) {
      return " active";
    } else {
      return "";
    }
  };

  return (
    <nav className="navbar1">
      <ul className="navbar1__list">
        {listItemNavbar.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={"navbar1__item " + CurrentActive(item.link)}
            onClick={() => setActive(item.link)}
          >
            <i className="navbar1__item-icon">{item.icon}</i>
            <p className="navbar1__item-name">{item.itemName}</p>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
