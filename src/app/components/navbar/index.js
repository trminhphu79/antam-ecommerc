import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
  
export const Navbar = () => {
    return <div className="Navbar">
        <ul>
            <li>
                <Link to="/">Trang chủ</Link>
            </li>
            <li>
                <Link to="/product">Sản phẩm</Link>
            </li>
            <li>
                <Link to="/contact">Liên hệ</Link>
            </li>
        </ul>
    </div>
}

