import React, { useState, useEffect } from "react";
import "./Banner2.css"; // Import the CSS file

const Banner2 = () => {
  const productNames = ["Electronics", "Fashion", "Home Appliances"];
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % productNames.length);
    }, 2000); // Change product every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [productNames.length]);

  return (
    <div className="banner-container">
      <div className="overlay flex flex-col items-center justify-center text-center space-y-8 px-4">
        {/* Main Text */}
        <h1 className="text-white font-extrabold leading-tight">
          <span className="text-6xl md:text-8xl">Up to 50% Off</span> <br />
          <span className="text-5xl md:text-7xl">Best Deals</span>
        </h1>

        {/* Products Section */}
        <div className="text-yellow-400 text-2xl md:text-3xl font-bold">
          <p>{productNames[currentProductIndex]}</p>
        </div>

        {/* Shop Now Button */}
        <button className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded hover:bg-red-600">
          Shop Now
        </button>

        {/* Search Bar */}
        <div className="flex mt-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow px-4 py-2 rounded-l border border-gray-300"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
