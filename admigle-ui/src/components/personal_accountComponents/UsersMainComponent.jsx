import React, { useState } from "react";
import styles from "./ChartsComponents/styles/MainChartComponent_style.module.scss";
import AddUserPopUpComponent from "./popup's components/AddUserPopUpComponent";
import { Users_DB } from "../../test_immitation/test_database_users";
import UserComponent from "./UserComponent";

export default function UsersMainComponent() {
  const [windowCreateUser, stateWindowCreateUser] = useState(false);

  const open_pop_up = () => {
    stateWindowCreateUser(!windowCreateUser);
  };

  return (
    <>
      <div className={styles.wrapper_charts}>
        <div className={styles.wrapper_add_users_btn}>
          <button type="button" onClick={open_pop_up}>
            Add User+
          </button>
        </div>

        <div className={styles.wrapper_users}>{
          Users_DB.map((item)=>{
            return(
            <UserComponent data = {item} key={item._key}/>
            )
          })
        }</div>
      </div>
      <AddUserPopUpComponent visib={windowCreateUser} state_fun  = {stateWindowCreateUser} />;
    </>
  );
}
