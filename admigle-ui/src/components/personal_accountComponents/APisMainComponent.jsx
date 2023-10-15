import React from "react";
import style from "../personal_accountComponents/ChartsComponents/styles/MainChartComponent_style.module.scss";
import apis from "../../static _data/apis_staic_data.js";

export default function () {
  return (
    <div className={style.wrapper_charts}>
      {apis.map((item) => {
        return (
          <div className={style.item_apis}>
            <img src={item.imgURL} alt="" />
            <div className={style.text_api}>
              <h2>{item.title}</h2>
              <p>{item.sub_text}</p>
            </div> 
          </div>
        );
      })}
    </div>
  );
}
