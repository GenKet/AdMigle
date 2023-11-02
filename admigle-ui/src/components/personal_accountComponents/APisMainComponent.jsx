import React from "react";
import style from "../personal_accountComponents/ChartsComponents/styles/MainChartComponent_style.module.scss";
import wrapper from "./styles/MainPersonalAccount_styles.module.scss";
import apis from "../../static _data/apis_staic_data.js";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { add_api } from "../../redux/connection_api's";

export default function APisMainComponent() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryObject = {};

  for (const [key, value] of params) {
    queryObject[key] = value;
  }

  const combinedClassNames = classNames(
    style.wrapper_charts,
    wrapper.wrapper_component
  );

  const dispatch = useDispatch();

  const google_adw = (index) => {
    if (index === "Google Adw") {
      window.location.href = "http://localhost:8000/adwords/";
    }
  };

  return (
    <div className={combinedClassNames}>
      {apis.map((item, index) => {
        const itemTitle = item.title;
        const itemHasQueryParam = queryObject.hasOwnProperty(itemTitle);
        const itemQueryParamValue = queryObject[itemTitle];

        if (itemHasQueryParam && itemQueryParamValue === '200') {
          dispatch(add_api(itemTitle));
        }

        return (
          <Link
            to={`../api's_charts/${itemTitle}`}
            key={index}
            onClick={() => google_adw(itemTitle)}
          >
            <div className={style.item_apis}>
              <div className={classNames(style.connection, { [style.visib]: !isEmpty(queryObject) && itemHasQueryParam && itemQueryParamValue === '200' })}>
                <i>&#10003;</i>
              </div>
              <img src={item.imgURL} />
              <div className={style.text_api}>
                <h2>{itemTitle}</h2>
                <p>{item.sub_text}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
