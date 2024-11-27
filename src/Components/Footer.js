import React from "react";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container py-4">
        <div className="footer-content">
          <div className="footer-section">
            <h4>E Shop</h4>
            <p>Karachi</p>
            <p>Sindh, Pakistan</p>
            <p>Phone: +000000000000000</p>
            <p>Email: info@E-Shop.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">T-Shirt</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Pants</a></li>
              <li><a href="#">Laptop</a></li>
              <li><a href="#">Smart Phone</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Social Networks</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright E Shop. All Rights Reserved</p>
        <p>Designed by SA Coding</p>
      </div>
    </footer>
  );
};

export default Footer;
