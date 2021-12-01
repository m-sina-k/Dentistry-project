import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./Context/context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/index.scss";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
