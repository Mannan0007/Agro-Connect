import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://cdn-icons-png.flaticon.com/128/869/869636.png" alt="Logo" />
          <h2>Farmers Marketplace</h2>
          <p>Organic Bounty, Nurturing Wellness</p>
        </div>

        <div className="footer-links">
          <h3>About</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Why us</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Our Blog</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>+234 902 813 5986</p>
          <p>hello@farmersmarketplace.ng</p>
        </div>

        <div className="footer-social">
          <h3>Get in Touch</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Farmers Marketplace 2025. All Rights Reserved</p>
        <p>License</p>
      </div>
    </footer>
  );
};

export default Footer;
