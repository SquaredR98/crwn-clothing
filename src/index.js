import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Starting v6 router can be used only by wrapping the whole <App />
 * in a <BrowserRouter /> component from react-router-dom. It will
 * allow us to use the APIs for the routing defined in the library.
 */
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
