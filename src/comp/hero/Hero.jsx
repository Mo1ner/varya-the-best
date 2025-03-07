import React from "react";

import varya1 from "../../assets/hero-img/варя.png";
import varya2 from "../../assets/hero-img/варя2.png";

import "./Hero.css";

const Hero = ({ ref }) => {
  return (
    <div ref={ref} className="hero">
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h1 className="hero-title">Что это за сайт</h1>
            <p>
              На этом сайте можно узнать почему варвара - лучшая девушка, а
              также её плюсы и минусы
            </p>
          </div>
          <div className="hero-img">
            <img src={varya1} alt="да-да" />
            <img src={varya2} alt="Варя 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
