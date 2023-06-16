import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
});
console.log(SHOP_DATA)

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA);
    const getCategoriesMap = async () => await getCategoriesAndDocuments();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
