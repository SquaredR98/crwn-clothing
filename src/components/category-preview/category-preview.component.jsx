import React from "react";

import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <div className="top-bar">
        <Link className="title" to={title}><span>{title}{' '} &#10151;</span></Link>
      </div>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
