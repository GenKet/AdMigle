import React from "react";
import InputFormComponent from "./formComponents/InputFormComponent";
import { Routes, Route } from "react-router-dom";
import RegFormComponent from "./formComponents/RegFormComponent";

function MainComponent() {
  return (
    <Routes>
      <Route path="/" element={<InputFormComponent  />} />
      <Route path="/reg_form" element={<RegFormComponent />} />
    </Routes>
  );
}

export default MainComponent;