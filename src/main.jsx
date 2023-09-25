import ReactDOM from "react-dom/client";
import React from "react";
import "normalize.css";
import "./index.css";
import Root from "./Root/Root.jsx";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
)