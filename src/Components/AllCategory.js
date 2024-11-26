import React, { useState, useEffect } from "react";
import "./AllCategory.css";

// Import images
import Slide1 from "./images/slide1.png";
import P2 from "./images/slide7.png";
import P3 from "./images/slide2.png";
import P4 from "./images/slide3.png";
import P5 from "./images/slide4.png";
import P6 from "./images/slide5.png";
import P7 from "./images/slide6.png";
import P8 from "./images/slide8.png";

const AllCategory = () => {
  const categories = [
    "T-Shirts",
    "Shoes",
    "Hoodies",
    "Cap",
    "Pants",
    "Laptop",
    "Keyboard",
    "Cameras",
    "Computer Mouse",
    "iPad & Tablets",
  ];

  const products = [Slide1, P2, P3, P4, P5, P6, P7, P8];
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSliderPosition((prev) => (prev + 1) % Math.ceil(products.length / 4)); // Change every 4 images
    }, 2000); // Change every 2 seconds

    return () => clearInterval(slideInterval);
  }, [products.length]);

  const getDisplayedImages = () => {
    const start = sliderPosition * 4;
    const end = start + 4;
    return products.slice(start, end);
  };

  return (
    <div className="all-categories-container">
      {/* All Categories Heading */}
      <div className="all-category-header">
        <h1>All Categories</h1>
      </div>

      {/* Category Buttons */}
      <div className="all-category">
        {categories.map((category, index) => (
          <button key={index}>
            <a href="#" className="nav-link">
              {category}
            </a>
          </button>
        ))}
      </div>

      {/* Product Images */}
      <div className="product-images">
        <div className="image-slider">
          {getDisplayedImages().map((image, index) => (
            <div key={index} className="product-image-container">
              <img src={image} alt={`Product ${index + 1}`} className="product-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>Products:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, optio
          sequi inventore sed accusamus harum. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Praesentium, tempora. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Itaque, beatae.
        </p>
      </div>
    </div>
  );
};

export default AllCategory;
