import React from "react";
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <>
      <header>
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 header_top_col left_content">
                <ul>
                  <li>
                    Email:
                    <a href="">support@posbytz.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTop;
