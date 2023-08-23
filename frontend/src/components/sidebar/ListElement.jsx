import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProduct, setID } from "../../state/reducers/productsReducer";

function ListElement({ product }) {
  const dispatch = useDispatch();
  //const { product } = useSelector((state) => state.products);

  // onclick -> fetch data about
  const getProductDetails = () => {
    dispatch(setID(product.id));
    dispatch(setEditProduct(product));
  };

  return (
    <div
      onClick={getProductDetails}
      className="text-center py-1 px-1 text-gray-700 cursor-pointer border-slate-400 border hover:bg-gray-200 transition-all text-sm"
    >
      <p>{product.title}</p>
    </div>
  );
}

export default ListElement;
