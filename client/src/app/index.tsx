import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

import "@/shared/css/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
