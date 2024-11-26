import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg"

export default function Header() {
  return ( 
    <nav class="navigation-container">
      <div>
        <img src={logo} alt="logo" />
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
      <div class="reglog">
        <a class="reg" href="/">
          Register
        </a>
        <a class="log" href="">
          Login
        </a>
      </div>
    </nav>
  );
}
