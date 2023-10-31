import React from 'react'
import style from "./ChartsComponents/styles/MainChartComponent_style.module.scss";

export default function ItemAnimationComponent() {
  return (
    <div className={style.item_animation_block}>
        <img src=''  alt='picture'/>
        <div className={style.text_block}>
            <h3>10000</h3>
            <p>Sales</p>
        </div>
    </div>
  )
}
