import React from "react";
import styles from "./styles/MainPersonalAccount_styles.module.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function SideBarMenuComponent() {
  const location = useLocation();

  const menu_items = location.pathname === "/personal_account";

  return (
    <div className={styles.wrapper_side_bar_menu}>
      <div className={styles.title_list}>General</div>
      <ul className={styles.list_menu}>
        <li>
          <NavLink to="">User's</NavLink>
        </li>

        {menu_items && (
          <>
            <li>
              <NavLink to="main_chart" style={{marginLeft:'10px', fontSize:'16px'}}>General</NavLink>
            </li>

            <li>
              <NavLink to="api's_tab"style={{marginLeft:'10px', fontSize:'16px'}}>API's</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
