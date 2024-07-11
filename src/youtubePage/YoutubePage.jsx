import React from "react";
import "./YoutubePage.css";

const YoutubePage = () => {
  return (
    <div className="youtube-container container">
      <div className="top_content">
        <h1>How it Works?</h1>
        <h4>
          Checkout how you can Automate your Business with PostBytz ERP Software
        </h4>
        <p>
          Discover how our <span>retail</span> and <span>restaurant</span> ERP
          software can revolutionize your business operations today!
        </p>
      </div>

      <iframe
        width="90%"
        height="600px"
        src="https://www.youtube.com/embed/xxQzhDkWPpc?si=CSc7_oMgNm1Z_cgu"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubePage;
