import React from "react";
import styles from "./styles/MainPersonalAccount_styles.module.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function SideBarMenuComponent() {
  const location = useLocation();

  const menu_items = location.pathname === "/personal_account/user's";

  return (
    <div className={styles.wrapper_side_bar_menu}>
      <div className={styles.title_list}>General</div>
      <ul className={styles.list_menu}>
        <li>
          <NavLink to="user's">User's</NavLink>
        </li>

        {menu_items && (
          <>
            <li>
              <NavLink to="/personal_account">General</NavLink>
            </li>

            <li>
              <NavLink to="api's_tab">API's</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
