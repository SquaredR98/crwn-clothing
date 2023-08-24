import React from "react";

import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title className="title" to={title}><span>{title.toUpperCase()}{' '} &#10151;</span></Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
