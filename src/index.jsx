import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import login from "./Auth.js"
import logout from "./Auth.js"


ReactDom.render(
  <Router>
    <div id="login">
    <button onClick={() => login()}>Login</button>
    <button onClick={() => logout()}>Logout</button>
    </div>
    <App />

  </Router>,
  document.querySelector("#root")
);
