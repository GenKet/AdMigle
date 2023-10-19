import React, {useState} from "react";
import style from "./styles/MainPersonalAccount_styles.module.scss";
import MainHeaderComponent from "./HeaderComponents/MainHeaderComponent";
import SideBarComponent from "./SideBarComponent";
import { Outlet } from "react-router-dom";


export default function MainPersonalAccountComponent() {


  return (
    <div className={style.wrapper_account}>
      <MainHeaderComponent />
      <SideBarComponent />
     
     <Outlet/>
    </div>
  );
}
