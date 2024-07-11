import React from "react";
import "./Footer.css";
import FooterMain from "./FooterMain";
import footerDatas from "./footerData.json";
import FooterList from "./FooterList";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className=" foo-container container">
          <div className="grid-container">
            <FooterMain />
            {footerDatas.map((footerData, index) => (
              <div className="footer-container" key={index}>
                <FooterList footerData={footerData} />
              </div>
            ))}
            <div className="footer-widget">
              <div className="header">
                <p>FIND US ON</p>
              </div>
              <div className="footer-icons">
                <div className="footer-icon">
                  <FaFacebookF />
                </div>
                <div className="footer-icon">
                  <FaTwitter />
                </div>
                <div className="footer-icon">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="reg-container">
            <p>@ 2023 Bytize</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
