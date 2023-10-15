import React from "react";
import style from "./styles/MainPersonalAccount_styles.module.scss";
import MainHeaderComponent from "./HeaderComponents/MainHeaderComponent";
import SideBarComponent from "./SideBarComponent";
import MainChartsComponent from "./ChartsComponents/MainChartsComponent";
import { Routes, Route } from "react-router-dom";
import APisMainComponent from "./APisMainComponent";


export default function MainPersonalAccountComponent() {
  return (
    <div className={style.wrapper_account}>
      <MainHeaderComponent />
      <SideBarComponent />
      <Routes>
        <Route path="general_tab" element={<MainChartsComponent />} />



        <Route path="api's_tab" element={<APisMainComponent />} />
      </Routes>
    </div>
  );
}
