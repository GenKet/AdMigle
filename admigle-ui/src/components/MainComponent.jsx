import React from "react";
import InputFormComponent from "./formComponents/InputFormComponent";
import { Routes, Route } from "react-router-dom";
import RegFormComponent from "./formComponents/RegFormComponent";
import MainPersonalAccountComponent from "./personal_accountComponents/MainPersonalAccountComponent";

import APisMainComponent from "./personal_accountComponents/APisMainComponent";
import ChartApisComponent from "./personal_accountComponents/ChartsComponents/ChartApisComponent";
import MainChartsComponent from "./personal_accountComponents/ChartsComponents/MainChartsComponent";
import UsersMainComponent from "./personal_accountComponents/UsersMainComponent";
import ProjectsComponent from "./personal_accountComponents/ProjectsComponent";



function MainComponent() {
  return (
    <>
      <Routes>
        <Route path="*" element={<InputFormComponent />}></Route>
        <Route path="regForm" element={<RegFormComponent />}></Route>
        <Route
          path="personal_account/*"
          element={<MainPersonalAccountComponent />}
        >

            <Route index element={<MainChartsComponent />} />

            <Route path="api's_tab" element={<APisMainComponent />} />

            <Route path="api's_charts/:key" element={<ChartApisComponent />} />

            <Route path="user_projects/:key" element = {<ProjectsComponent/>}></Route>
            
            <Route path="user's" element = {<UsersMainComponent/>}></Route>

        </Route>
       
      </Routes>
    </>
  );
}

export default MainComponent;
