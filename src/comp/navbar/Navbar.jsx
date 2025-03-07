import React, { useState } from "react";

import heart from "../../assets/navbar-img/heart.png";
import glasses from "../../assets/navbar-img/sunglasses.png";
import diamond from "../../assets/navbar-img/diamond.png";
import coal from "../../assets/navbar-img/coal.png";
import powder from "../../assets/navbar-img/powder.png";
import bars from "../../assets/navbar-img/menu-open.svg";
import cross from "../../assets/navbar-img/cross.svg";

import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-title">
            <img
              src={heart}
              alt="heart"
              className="navbar-title-icon left-icon"
            />
            <a
              onClick={(e) => {
                scrollToSection("hero", e);
                closeMobileMenu();
              }}
              href="#"
            >
              Барбара
            </a>
            <img
              src={heart}
              alt="heart"
              className="navbar-title-icon right-icon"
            />
          </div>
          {/* burger menu */}
          <div className="menu-icon" onClick={handleClick}>
            <img
              className={click ? "menu-img active" : "menu-img"}
              src={click ? cross : bars}
              alt="mobile menu"
            />
          </div>

          <ul className={click ? "navbar-items active" : "navbar-items"}>
            <li
              className="navbar-link"
              onClick={(e) => {
                scrollToSection("pros", e);
                closeMobileMenu();
              }}
            >
              <img
                src={glasses}
                alt="glasses"
                className="navbar-pros-icon left-icon"
              />
              <a href="#" className="item-link">
                Плюсы
              </a>
              <img
                src={diamond}
                alt="diamond"
                className="navbar-pros-icon right-icon"
              />
            </li>

            <li
              className="navbar-link"
              onClick={(e) => {
                scrollToSection("cons", e);
                closeMobileMenu();
              }}
            >
              <img
                src={coal}
                alt="coal"
                className="navbar-cons-icon left-icon"
              />
              <a href="#" className="item-link">
                Минусы
              </a>
              <img
                src={powder}
                alt="powder"
                className="navbar-cons-icon right-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
