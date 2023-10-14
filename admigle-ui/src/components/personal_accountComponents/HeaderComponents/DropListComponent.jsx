import React from "react";
import styles from "./styles/DropList_styles.module.scss";
import languages_data from "../../../static _data/static_data_store.js";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import {switchLang} from '../../../redux/langredux_logic'
import {visib_list} from '../../../redux/drop_list_logic'

export default function DropListComponent({ visib, ignore_lang }) {

   const get_ignore_key = (ignore) => {
    for (const key in languages_data) {
      if (languages_data.hasOwnProperty(key)) {
        const object = languages_data[key];
        if (JSON.stringify(object) === JSON.stringify(ignore)) {
          return key;
        }
      }
    }
  };

 const ignore_key = get_ignore_key(ignore_lang);

  const dispath = useDispatch();

  const lang_switch = (lang) => {
    dispath(switchLang(lang));
    dispath(visib_list())
  };

  const copyData = {... languages_data}

  delete copyData[ignore_key]

  return (
    <div
      className={classNames(styles.wrapper_list, { [styles.open_list]: visib })}
    >
      <div className={styles.list}>
        {Object.keys(copyData).map((key) => {
          const language = languages_data[key];
          return (
            <div
              key={key}
              className={styles.item_list}
              onClick={() => lang_switch(language)}
            >
              <p className={styles.title_lang}>{language.title}</p>
              <img src={language.imgURL} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
