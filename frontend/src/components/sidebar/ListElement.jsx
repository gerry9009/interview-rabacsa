import React from "react";
import { useDispatch } from "react-redux";
import { setID } from "../../state/reducers/productsReducer";

function ListElement({ product }) {
  const dispatch = useDispatch();

  // onclick -> fetch data about
  const getProductDetails = () => {
    dispatch(setID(product.id));
  };

  return (
    <div
      onClick={getProductDetails}
      className="text-center py-1 text-gray-700 align-middle cursor-pointer border-slate-400 border hover:bg-gray-200 transition-all text-sm"
    >
      <p>{product.title}</p>
    </div>
  );
}

export default ListElement;
