import React from "react";
import { useSelector } from "react-redux";

function Meta() {
  const { product } = useSelector((state) => state.products);
  return (
    <div className="meta-data border">
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>{product.brand}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
}

export default Meta;
