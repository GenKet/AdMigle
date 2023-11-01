import React from "react";
import style from "../personal_accountComponents/ChartsComponents/styles/MainChartComponent_style.module.scss";
import wrapper from './styles/MainPersonalAccount_styles.module.scss'
import apis from "../../static _data/apis_staic_data.js";
import { Link, useParams} from "react-router-dom";
import classNames from 'classnames'

export default function APisMainComponent () {

  const {connection_apis} = useParams ();
  
  const combinedClassNames = classNames(style.wrapper_charts, wrapper.wrapper_component);

  const google_adw = (index) =>{
   if(index  === 'Google Adw'){
    window.location.href = 'http://localhost:8000/adwords/';
   }
  }

  return (
    <div className={combinedClassNames}>
      {apis.map((item, index) => {
        return (

          <Link to ={ `../api's_charts/${item.title}`} key={index} onClick={()=>google_adw(item.title)}>
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
