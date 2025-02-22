import React from "react";
import ReactDOM from "react-dom/client";
import JournalApp from "./JournalApp.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
