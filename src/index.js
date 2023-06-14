import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Starting v6 router can be used only by wrapping the whole <App />
 * in a <BrowserRouter /> component from react-router-dom. It will
 * allow us to use the APIs for the routing defined in the library.
 */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
