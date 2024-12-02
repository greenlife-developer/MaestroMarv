import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/mobile/logo_mobile.svg";
import logo3 from "../../assets/images/mobile/logo_mobile_menu.svg";
import cancel from "../../assets/images/mobile/cross_mobile_menu.svg";
import menu from "../../assets/images/mobile/menu.svg";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const showNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <nav
      class={
        isNavBarVisible
          ? "navigation-container nav_visible"
          : "navigation-container"
      }
    >
      <div>
        <img className="web_logo" src={logo} alt="logo" />
        {isNavBarVisible ? (
          <div className="menu_logo_cancel">
            <img
              onClick={showNavBar}
              className="mobile_logo"
              src={logo3}
              alt=""
            />
            <img src={cancel} alt="" />
          </div>
        ) : (
          <img
            onClick={showNavBar}
            className="mobile_logo"
            src={logo2}
            alt=""
          />
        )}
      </div>
      <div class="navigation-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/repairs">Repairs</NavLink>
          </li>
          <li>
            <NavLink to="/sales">Sales</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <div>
          <h1>Hello, Joshua</h1>
        </div>
      ) : (
        <div class="reglog">
          <a class="reg" href="/">
            Register
          </a>
          <a class="log" href="">
            Login
          </a>
        </div>
      )}
      <img onClick={showNavBar} className="menu_icon" src={menu} alt="" />
    </nav>
  );
}
