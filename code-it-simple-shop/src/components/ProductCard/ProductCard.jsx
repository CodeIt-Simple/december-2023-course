import React from "react";
import "./ProductCard.css"
import { useNavigate } from "react-router-dom";
const ProductCard = ({id,src,title,price}) => {
  const navigate = useNavigate()
  return (
    <div className="product-card">
      <div onClick={() => navigate(`/items/${id}`)} className="product-image">
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
