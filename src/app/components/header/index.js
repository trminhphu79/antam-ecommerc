import React from "react";
import "./Header.scss";
export const Header = () => {
    return <div className="Header d-flex">
        <div className="header-logo">
            <img src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/270756342_1942765182777712_5217275879306776290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MMOLYuG1UbwAX_XPFtr&tn=5YHeEMRR_7jBpiAG&_nc_ht=scontent-hkg4-1.xx&oh=00_AT_gL0RLFK7BMFGLh2Q6PEBVJcEJPZOQASWDDjT1ufKmag&oe=62104FAF" />
        </div>
        <div className="header-search">
            <input type="search" placeholder="" />
        </div>
        <div className="header-contact">
            <span>033.9841.31</span>
        </div>
    </div>
}

