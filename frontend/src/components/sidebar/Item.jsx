import React from "react";
import { fetchProduct } from "../../state/reducers/productsReducer";
import { useDispatch } from "react-redux";

function Item({ product }) {
  const dispatch = useDispatch();

  // onclick -> fetch data about
  const getProductDetails = () => {
    dispatch(fetchProduct(product.id));
  };

  return (
    <li onClick={getProductDetails}>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </li>
  );
}

export default Item;
