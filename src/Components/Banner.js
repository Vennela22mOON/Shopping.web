import React from "react";
import SmartWatchImage from "./images/watch2.png"; 
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* Left side with text and buttons */}
        <div className="banner-text">
          <h1>UP TO 50% OFF</h1>
          <h1>Best Deal</h1>
          <div id="btn1">
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="banner-image">
          <img src={SmartWatchImage} alt="Smart Watch" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
