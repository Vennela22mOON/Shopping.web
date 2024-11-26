import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Products from "./Components/Products";
import AllCategory from "./Components/AllCategory";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
       <Banner />
       <Banner2/>
      <Products />
      <AllCategory />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
