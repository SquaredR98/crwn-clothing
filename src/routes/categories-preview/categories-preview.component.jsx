import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, index) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} products={products} title={title} />
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
