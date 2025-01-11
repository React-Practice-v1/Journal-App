import React from "react";
import ReactDOM from "react-dom/client";
import JournalApp from "./JournalApp.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </React.StrictMode>
);
