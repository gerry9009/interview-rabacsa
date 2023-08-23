import React, { useState } from "react";

import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";

function Actions() {
  const [addNewPage, setAddNewPage] = useState(true);

  const toggleAddNewPage = () => {
    setAddNewPage(true);
  };

  const toggleEditPage = () => {
    setAddNewPage(false);
  };

  const btnStyle =
    "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-sm py-1 px-4";

  const ButtonGroup = () => {
    return (
      <div className="inline-flex w-full border-gray-200 border-b-2">
        <button
          className={`${btnStyle} rounded-tl-lg ${
            addNewPage ? "bg-blue-100" : ""
          }`}
          onClick={toggleAddNewPage}
        >
          Add new product
        </button>

        <button
          className={`${btnStyle} rounded-tr-lg ${
            addNewPage ? "" : "bg-blue-100"
          }`}
          onClick={toggleEditPage}
        >
          Edit current product
        </button>
      </div>
    );
  };
  return (
    <div className="col-start-2 col-span-full row-start-8 row-span-1 bg-gray-50 w-full">
      <ButtonGroup />
      {addNewPage ? <NewProduct /> : <EditProduct />}
    </div>
  );
}

export default Actions;
