import React from "react";
import "./Navbar.scss";
import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";
  
export const Navbar = () => {
    return <div className="Navbar">
        <ul>
            <li>
                <Link to="/">Trang chủ</Link>
            </li>
            <li>
                <Link to="/san-pham">Sản phẩm</Link>
            </li>
            <li>
                <Link to="/lien-he">Liên hệ</Link>
            </li>
        </ul>
    </div>
}

