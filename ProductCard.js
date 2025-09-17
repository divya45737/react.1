import React from "react";
import "./App.css"; // we can keep styles in App.css for now

const ProductCard = ({ name, price, status }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default ProductCard;
