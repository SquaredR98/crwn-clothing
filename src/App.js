import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const ShopPage = () => {
  return <h1>This is a shoppage component.</h1>
}

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default App;
