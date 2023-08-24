import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditProduct,
  setID,
  setSearchField,
  setViewCategories,
} from "../../state/reducers/productsReducer";
import { fetchFilteredProducts } from "../../state/reducers/productsReducer";

function ListElement({ item }) {
  const dispatch = useDispatch();
  const { viewCategories, product } = useSelector((state) => state.products);

  // onclick -> fetch data about
  const getProductDetails = () => {
    // clear searchfield value
    dispatch(setSearchField(""));
    if (viewCategories) {
      // fetchFiltered products
      dispatch(fetchFilteredProducts(item));
      // set false to viewCategories
      dispatch(setViewCategories(false));
    } else {
      dispatch(setID(item.id));
      dispatch(setEditProduct(item));
    }
  };

  return (
    <div
      onClick={getProductDetails}
      className={`${
        product.title && product.title === item.title
          ? "text-white bg-blue-400"
          : "text-gray-700"
      } text-center h-16 cursor-pointer border-slate-300 border hover:bg-gray-300 hover:text-white transition-all text-sm`}
    >
      <p>{viewCategories ? item : item.title}</p>
    </div>
  );
}

export default ListElement;
