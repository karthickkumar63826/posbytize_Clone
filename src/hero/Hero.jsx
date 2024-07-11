import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container hero-container">
      <div className="main-container ">
        <div className="header">
          <h1>Your All-in-one Cloud based </h1>
          <h1>Restaurent & Retail ERP Software</h1>
        </div>
        <div className="content">
          <p>
            Posbytz ERP software is the perfect solution for simplifying your
            business operation
          </p>
          <p>
            from POS, Ecommerce, inventory, Accounting, CRM and HR & Payroll
          </p>
        </div>
        <div className="hero-btn">
          <button> Get started </button>
        </div>
        <div className="hero-img">
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/rating-main-10-1024x110.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
