import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux_root.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <GoogleOAuthProvider clientId='534721407121-vn0mg3j0abdijpnef51tfmkbngkh33ej.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </Router>
  </Provider>
);
