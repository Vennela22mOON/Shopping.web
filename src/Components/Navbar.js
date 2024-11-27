import React from "react";
import FaceBook from "./images/facebook.png";
import Twitter from "./images/twitter.png";
import Google from "./images/google.png";
import EShopLogo from "./images/shop.png";
import "./Navbar.css";

const Navbar = () => {
  const categories = [
    "T-Shirts",
    "Shoes",
    "Hoodies",
    "Caps",
    "Pants",
    "Laptop",
    "Keyboard",
    "Cameras",
    "Computer Mouse",
    "Watch",
    "iPad & Tablets",
    "Headphones",
    "Other",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-sm" id="navbar-top">
        <div className="container">
          <h5>E Shop@info.com</h5>
          <div className="rsc">
            <button id="btn3">
              <span>Login</span>
            </button>
            <button id="btn3">
              <span>Register</span>
            </button>
            <div className="icons">
              <img src={FaceBook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Google} alt="Google" />
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md" id="navbar-color">
        <div className="container">
          <a className="navbar-brand" href="/" id="navbar-logo">
            <img src={EShopLogo} alt="Shop Logo" />
            E Shop
          </a>
          <div className="navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Product
                </a>
              </li>
              {/* Categories Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop">
                  Category
                </a>
                <div className="dropdown-menu">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      className="dropdown-item"
                      href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="new-icons">
            <i className="bx bxs-cart"></i>
            <i className="bx bxs-heart"></i>
            <i className="bx bxs-user"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
