import React from "react";
import styles from "./styles/MainPersonalAccount_styles.module.scss";
import img from "../../images/free-icon-verified-account-4885320.png";
import { Link } from "react-router-dom";

export default function UserComponent({ data }) {
  return (
    <Link to={`../user_projects/${data._key}`}>
      <div className={styles.wrapper_user_icon} name={data._key}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>

        <div className={styles.main_info}>
          <div>
            <h5>{data.name}</h5>

            <i>{data.website}</i>
          </div>
        </div>
      </div>
    </Link>
  );
}
