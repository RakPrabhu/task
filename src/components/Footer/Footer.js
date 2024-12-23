import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Terms & Conditions Section */}
        <div className="footer-section">
          <a href="#terms" className="footer-link">Terms & Conditions</a>
        </div>

        {/* Copyright Section */}
        <div className="footer-section">
          <p>&copy; 2024 Exelon Circuits Pvt. Ltd. All rights reserved.</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="footer-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
