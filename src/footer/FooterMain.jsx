import React from "react";

const FooterMain = () => {
  return (
    <>
      <div className="footer-main">
        <img
          src="https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg"
          className="footer-img"
          alt="Posbytz logo"
        />
        <div className="footer-main-header">
          <p>
            Posbytz is your comprehensive platform to manage everything you need
            to sell and grow your business.
          </p>
        </div>
        <div className="footer-main-content">
          <p>
            Posbytz is a product of{" "}
            <span className="highlight">Bytize, inc.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterMain;
