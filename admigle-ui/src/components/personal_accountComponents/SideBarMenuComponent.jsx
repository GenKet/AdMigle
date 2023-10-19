import React from "react";
import styles from "./styles/MainPersonalAccount_styles.module.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function SideBarMenuComponent() {

  return (
    <div className={styles.wrapper_side_ber_menu}>
      <ul className={styles.list_menu}>
        <li>
          <NavLink
            to="/personal_account"
          >
            General
          </NavLink>
        </li>
        <li>
          <NavLink

            to="api's_tab"
          >
            API's
          </NavLink>
        </li>
        <input type="file"/>
      </ul>
    </div>
  );
}
