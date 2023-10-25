import React from "react";
import style from "../personal_accountComponents/ChartsComponents/styles/MainChartComponent_style.module.scss";
import wrapper from './styles/MainPersonalAccount_styles.module.scss'
import apis from "../../static _data/apis_staic_data.js";
import { Link} from "react-router-dom";
import classNames from 'classnames'

export default function APisMainComponent () {

  return (
    <div className={classNames(style.wrapper_charts, wrapper.wrapper_component)}>
      {apis.map((item, index) => {
        return (
          <Link to ={ `../api's_charts/${item.title}`} key={index}>
            <div
              className={style.item_apis}
            >
              <img src={item.imgURL} />
              <div className={style.text_api}>
                <h2>{item.title}</h2>
                <p>{item.sub_text}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
