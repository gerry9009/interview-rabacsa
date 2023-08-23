import React, { useState } from "react";

import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";
import { useDispatch, useSelector } from "react-redux";
import { setEditProduct } from "../../state/reducers/productsReducer";

function Actions() {
  const dispatch = useDispatch();
  const { products, product } = useSelector((state) => state.products);
  const [addNewPage, setAddNewPage] = useState(true);

  const toggleAddNewPage = () => {
    setAddNewPage(true);
  };

  const toggleEditPage = () => {
    setAddNewPage(false);
    dispatch(setEditProduct(product));
  };

  const btnStyle = "hover:bg-gray-300 text-gray-800 font-bold text-sm px-4";

  const ButtonGroup = () => {
    return (
      <div className="inline-flex w-full border-gray-200 border-b-2">
        <button
          className={`${btnStyle} rounded-tl-lg ${
            addNewPage ? "bg-blue-400" : "bg-gray-200"
          }`}
          onClick={toggleAddNewPage}
        >
          Add new product
        </button>

        <button
          className={`${btnStyle} ${
            addNewPage ? "bg-gray-200" : "bg-blue-400"
          } rounded-tr-lg `}
          onClick={toggleEditPage}
          disabled={products.length ? false : true}
        >
          Edit current product
        </button>
      </div>
    );
  };
  return (
    <div className="col-start-2 col-span-full row-start-8 row-span-1 bg-gray-50 w-full flex flex-col">
      <ButtonGroup />
      {addNewPage ? <NewProduct /> : <EditProduct />}
    </div>
  );
}

export default Actions;
