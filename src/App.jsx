import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/Checkout/checkout.component";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

/**
 * In order to make the routes or pages routeable we must wrap
 * all other components in <Routes /> and with it we would be
 * able to implement the routing functionaity easily.
 */
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>
      user
        ? createUserDocumentFromAuth(user) && dispatch(setCurrentUser(user))
        : dispatch(setCurrentUser(user))
    );

    return unsubscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
