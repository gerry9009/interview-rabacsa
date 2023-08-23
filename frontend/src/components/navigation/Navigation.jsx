import React from "react";
import {
  fetchHighPriceProducts,
  fetchProducts,
  setPaginationPage,
  setViewCategories,
} from "../../state/reducers/productsReducer";
import { useDispatch } from "react-redux";

function Navigation() {
  const dispatch = useDispatch();

  const getAllProducts = () => {
    dispatch(fetchProducts());
    dispatch(setViewCategories(false));
  };

  const getHighPriceProducts = () => {
    dispatch(fetchHighPriceProducts());
    dispatch(setViewCategories(false));
  };

  const getCategoriesList = () => {
    dispatch(setViewCategories(true));
    dispatch(setPaginationPage(1));
  };

  const btnStyle =
    "bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded";

  return (
    <div className="grid-row-1 grid-col-1 col-span-full row-span-1 border-2 p-2 bg-gray-50">
      <div className="w-full h-full flex justify-around items-center">
        <button onClick={getAllProducts} className={btnStyle}>
          Products
        </button>
        <button onClick={getHighPriceProducts} className={btnStyle}>
          Top 25 Products
        </button>
        <button className={btnStyle} onClick={getCategoriesList}>
          Products Categories
        </button>
      </div>
    </div>
  );
}

export default Navigation;
