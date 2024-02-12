import React from "react";
import "./ProductCard.css"
const ProductCard = ({src,title,price}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={src} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
      </div>
    </div>
  );
};

export default ProductCard;
