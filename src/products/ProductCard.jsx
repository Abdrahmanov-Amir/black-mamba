import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt="shoe" />
      <h3>{title}</h3>
      <p className="price">{price} тг</p>
      <button>В корзину</button>
    </div>
  );
};

export default ProductCard;