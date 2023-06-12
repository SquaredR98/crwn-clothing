import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";

/**
 * In order to make the routes or pages routeable we must wrap
 * all other components in <Routes /> and with it we would be 
 * able to implement the routing functionaity easily.
 */
const App = () => {
  return (
    <Routes>
      <Route path="/"  element={<Navigation />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
