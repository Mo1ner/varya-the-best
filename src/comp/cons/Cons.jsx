import React from "react";

import picture from "../../assets/cons-img/шедевр.jpg";

import "./Cons.css";

const Cons = ({ ref }) => {
  return (
    <div ref={ref} className="cons">
      <div className="cons-container">
        <div className="cons-wrapper">
          <div className="cons-title">
            <h2>Минусы</h2>
          </div>
          <div className="cons-img">
            <img src={picture} alt="шедевр" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cons;
