import React from "react";
import InputFormComponent from "./formComponents/InputFormComponent";
import { Routes, Route } from "react-router-dom";
import RegFormComponent from "./formComponents/RegFormComponent";
import MainPersonalAccountComponent from "./personal_accountComponents/MainPersonalAccountComponent";

function MainComponent() {
  return (
    <>
      <Routes>
        <Route path="*" element={<InputFormComponent />}></Route>
        <Route path="/regForm" element={<RegFormComponent />}></Route>
        <Route path="/persoanl_account" element = {<MainPersonalAccountComponent/>}></Route>
      </Routes>
    </>
  );
}

export default MainComponent;
