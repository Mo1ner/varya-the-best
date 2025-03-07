import React from "react";

import rose from "../../assets/footer-img/rose.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-text">
            <img src={rose} alt="rose" className="footer-img left-img" />
            <p>made from nikita to varia with love</p>
            <img src={rose} alt="rose" className="right-img left-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
