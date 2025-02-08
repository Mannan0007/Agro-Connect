import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; // ✅ Import Link
import logomain from '../assets/download.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logomain} />

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="BountySection.js">Marketplace</a></li>
        <li><a href="WhyChoose.js">Blog</a></li>
        <li><a href="HowItWorks.js">Language</a></li>
        <li><a href="#">Map</a></li>
      </ul>
      <button className="shop-btn">
      <Link to="/login">Login</Link> {/* ✅ Use Link here */}

      </button>
    </nav>
  );
};

export default Navbar;
