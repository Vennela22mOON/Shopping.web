import React from "react";
import "./Contact.css"; // Importing the CSS file
import { FaShippingFast, FaTruck, FaCogs } from 'react-icons/fa'; // Importing Font Awesome icons

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="row">
        {/* Left Column for Name, Email, and Phone */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="usr"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="eml"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="phn"
              placeholder="Phone"
            />
          </div>
          <div id="btn1">
            <button className="contact-btn">Send Message</button>
          </div>
        </div>

        {/* Right Column for Message */}
        <div className="col-md-6">
          <div className="form-group">
            <textarea
              className="form-control"
              id="comment"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>

      {/* New Section for Three Headings with Icons */}
      <div className="features">
        <div className="feature-item">
          <FaShippingFast className="feature-icon" />
          <h3>Free Shipping</h3>
        </div>
        <div className="feature-item">
          <FaTruck className="feature-icon" />
          <h3>Fast Delivery</h3>
        </div>
        <div className="feature-item">
          <FaCogs className="feature-icon" />
          <h3>Big Choice</h3>
        </div>
      </div>

      {/* New Section for Subscribe to E-Shop Store */}
      <div className="subscribe-section">
        <h2>Subscribe To The E Shop Store For Latest Update</h2>
        <div className="subscribe-form">
          <input
            type="email"
            className="subscribe-input"
            placeholder="Enter your email"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
