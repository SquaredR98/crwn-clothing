import React from "react";
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const navigateTo = useNavigate();
  const { imageUrl, title, route } = category;
  const onNavigateHandler = () => navigateTo(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
