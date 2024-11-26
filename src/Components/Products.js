import React from "react";
import "./Products.css"; // Import the CSS file
import P1Image from "./images/p1.jpg";
import P2Image from "./images/p2.jpg";
import P3Image from "./images/p3.jpg";
import P4Image from "./images/p4.jpg";
import P5Image from "./images/p5.png";
import P6Image from "./images/p6.png";
import P7Image from "./images/p7.png";
import P8Image from "./images/p8.png";

const Products = () => {
  const products = [
    {
      id: 1,
      image: P1Image,
      title: "Formal Blue Shirt",
      price: "$45.99",
      stars: 5,
    },
    {
      id: 2,
      image: P2Image,
      title: "Dark Black T-Shirt",
      price: "$200.50",
      stars: 3,
    },
    {
      id: 3,
      image: P3Image,
      title: "Casual White Sneakers",
      price: "$75.00",
      stars: 4,
    },
    {
      id: 4,
      image: P4Image,
      title: "Stylish Sunglasses",
      price: "$120.00",
      stars: 4,
    },
    {
      id: 5,
      image: P5Image,
      title: "Leather Jacket",
      price: "$250.00",
      stars: 5,
    },
    {
      id: 6,
      image: P6Image,
      title: "Denim Blue Jeans",
      price: "$80.00",
      stars: 3,
    },
    {
      id: 7,
      image: P7Image,
      title: "White Sneakers",
      price: "$90.00",
      stars: 4,
    },
    {
      id: 8,
      image: P8Image,
      title: "Red Scarf",
      price: "$35.00",
      stars: 4,
    },
  ];

  return (
    <div className="products-container">
      <h1 className="text-center product-header">PRODUCTS</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-price">{product.price}</p>
                <div className="star-rating">
                  {[...Array(product.stars)].map((_, index) => (
                    <i key={index} className="bx bxs-star checked"></i>
                  ))}
                </div>
                <button className="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
