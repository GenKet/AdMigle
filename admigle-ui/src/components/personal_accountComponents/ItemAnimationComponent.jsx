import React from "react";
import style from "./ChartsComponents/styles/MainChartComponent_style.module.scss";
import cart from "../../images/cart.svg";

export default function ItemAnimationComponent() {
  return (
    <div className={style.item_animation_block}>
      <div className={style.animation}>
        <img src={cart} alt="picture" />
      </div>

      <div className={style.text_block}>
        <h3>10000</h3>
        <p>Sales</p>
      </div>
    </div>
  );
}
