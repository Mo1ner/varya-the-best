import React from "react";

import varia3 from "../../assets/pros-img/варя3.png";
import varia4 from "../../assets/pros-img/варя4.png";
import zhenya from "../../assets/pros-img/женя.png";
import sesia from "../../assets/pros-img/sesia.png";
import cake from "../../assets/pros-img/cake.png";
import ramen from "../../assets/pros-img/ramen.png";

import "./Pros.css";

const Pros = ({ ref }) => {
  return (
    <div ref={ref} className="pros">
      <div className="pros-container">
        <div className="pros-title">
          <h2>Плюсы</h2>
        </div>
        <div className="pros-wrapper">
          <div className="first-wrap">
            <div className="pros-img">
              <img src={varia3} alt="" />
              <img src={varia4} alt="" />
            </div>
            <div className="pros-text">
              <p>
                варя очень красивая:у неё прекрасная улыбка и шедевральные
                волосы. также она очень смешно шутит, в её арсенале есть такие
                удивительные анектоды: “Скорая помощь в китае”, “проститутка и
                фрукты”
              </p>
            </div>
          </div>
          <div className="second-wrap">
            <div className="pros-text">
              <p>
                ОНА ОЧЕНЬ ВКУСНО ГОТОВИТ, ЛУЧШЕ ВСЕГО У НЕЁ ПОЛУЧАЮТСЯ ТАКИЕ
                БЛЮДА, КАК СЫРНИКИ, ТОРТЫ И РАМЕНы. можно увидеть примеры её
                шедевров на картинке
              </p>
            </div>
            <div className="pros-img">
              <img src={ramen} alt="" />
              <img src={cake} alt="" />
            </div>
          </div>
          <div className="third-wrap">
            <div className="pros-img">
              <img src={sesia} alt="" />
              <img src={zhenya} alt="" />
            </div>
            <div className="pros-text">
              <p>
                ЕЩЁ У НЕЁ ОЧЕНЬ КРУТАЯ КОШКА СЕСЯ И НЕ МЕНEE КРУТАЯ ПОДРУГА ЖЕНЯ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pros;
