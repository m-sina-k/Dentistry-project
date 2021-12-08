import React from "react";
import { render } from "react-dom";
import App from "./App";
import {AppProvider} from "./Context/context";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Style/index.scss'
render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
