import React from "react";
import styles from "./styles/MainPersonalAccount_styles.module.scss";
import { Link, useLocation } from "react-router-dom";

export default function SideBarMenuComponent() {
    const location =  useLocation();
  return (
    <div className={styles.wrapper_side_ber_menu}>
      <ul className={styles.list_menu}>
        <li>
          <Link to ="general_tab">General</Link>
        </li>
        <li>
            <Link to="api's_tab">API's</Link>
        </li>
      </ul>
    </div>
  );
}
