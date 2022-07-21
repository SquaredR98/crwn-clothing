import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import AuthenticationPage from "./routes/authentication/authentication.component";


const ShopPage = () => {
  return <h1>This is a shoppage component.</h1>
}

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="auth" element={<AuthenticationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
