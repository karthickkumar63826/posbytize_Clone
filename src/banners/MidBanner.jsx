import React from "react";
import "./MidBanner.css";

const MidBanner = () => {
  return (
    <div className="midBanner">
      <div className=" midBanner-container container">
        <div className="banner">
          <div className="banner-content">
            <h1>
              Run Your Business <span>With PosBytz ERP Software</span>
            </h1>
          </div>
          <div className="banner-btn">
            <button>Sign up for free</button>
          </div>
        </div>
        <div className="banner-logo">
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-13.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
