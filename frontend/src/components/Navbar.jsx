import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Ocena-Logo.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-section navbar-left navbar-logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-section navbar-center">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
        
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
            About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link">
            Services
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link">
            Portfolio
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/contact-us" className="nav-link">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-section navbar-right">
        <button className="login-button">Click</button>
      </div>
    </nav>
  );
};

export default Navbar;
