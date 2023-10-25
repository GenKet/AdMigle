import React from "react";
import styles from "./styles/MainPersonalAccount_styles.module.scss";
import img from "../../images/free-icon-verified-account-4885320.png";

export default function UserComponent({ data }) {
    const projects = (e) => {
      const name = e.currentTarget.getAttribute("name");
      console.log(name);
    }
  
    return (
      <div className={styles.wrapper_user_icon} onClick={projects} name={data._key}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
  
        <div className={styles.main_info}>
          <h5>{data.name}</h5>
        </div>
      </div>
    );
  }
