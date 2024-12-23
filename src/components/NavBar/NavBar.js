import React from "react";
import "./NavBar.css";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ZARE</div>
      {/* <ul className="navbar-links">
        <li><a href="#new-arrivals">New Arrivals</a></li>
        <li><a href="#best-sellers">Best Sellers</a></li>
        <li><a href="#collections">Collections</a></li>
        <li><a href="#low-price">Low Price</a></li>
        <li><a href="#black-friday">Black Friday</a></li>
      </ul> */}
      <div className="navbar-icons">
        <FiShoppingCart className="navbar-icon" />
        <HiOutlineMenu className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
