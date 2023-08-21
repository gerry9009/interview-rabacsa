import React from "react";
import { fetchProducts } from "../../state/reducers/productsReducer";
import { useDispatch } from "react-redux";

function Navigation() {
  const dispatch = useDispatch();

  const getAllProducts = () => {
    dispatch(fetchProducts());
  };

  return (
    <div className="navigation border">
      <h2>Navigation</h2>
      <button onClick={getAllProducts}>Products</button>
      <button>Products Categories</button>
      <button>Top 25 Products</button>
    </div>
  );
}

export default Navigation;
