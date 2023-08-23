import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  patchProduct,
  setEditProduct,
  setOpenDeleteModal,
} from "../../state/reducers/productsReducer";
import DeleteModal from "./DeleteModal";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { editProduct, currencyRate, openDeleteModal } = useSelector(
    (state) => state.products
  );

  // not possible to save values state in the component
  // it need use globally variable from state, because of the 20s reload, and save the data in the state management
  //const [values, setValues] = useState({});
  const [currency, setCurrency] = useState("EUR");

  const handleChangeValue = (key, value) => {
    const num = Number(value);
    if (key === "price") {
      if (num >= 0) {
        dispatch(setEditProduct({ ...editProduct, [key]: value }));
      }
    } else {
      dispatch(setEditProduct({ ...editProduct, [key]: value }));
    }
  };

  const handleSubmit = () => {
    if (currency === "EUR") {
      dispatch(patchProduct(editProduct));
    } else {
      dispatch(
        patchProduct({
          ...editProduct,
          price: Math.round(Number(editProduct.price / currencyRate)),
        })
      );
    }
  };

  const handleDelete = () => {
    dispatch(setOpenDeleteModal(true));
  };

  const labelStyle =
    "block uppercase tracking-wide text-gray-700 text-xs font-bold";
  const inputStyle =
    "appearance-none text-xs block w-full h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

  return (
    <div className="flex justify-between item-top gap-x-1 h-full px-2 py-1">
      <div className="w-2/12">
        <label htmlFor="title" className={labelStyle}>
          Title
        </label>
        <input
          type="text"
          id="title"
          className={inputStyle}
          onChange={(e) => handleChangeValue("title", e.target.value)}
          value={editProduct.title}
        />
      </div>
      <div className="w-6/12">
        <label htmlFor="description" className={labelStyle}>
          Description
        </label>
        <input
          type="text"
          id="description"
          className={inputStyle}
          onChange={(e) => handleChangeValue("description", e.target.value)}
          value={editProduct.description}
        />
      </div>
      <div className="w-2/12">
        <label className={labelStyle} htmlFor="price">
          Price
        </label>
        <div className="relative">
          <input
            className={`${inputStyle} pl-3 pr-10`}
            type="text"
            id="price"
            value={editProduct.price}
            onChange={(e) => handleChangeValue("price", Number(e.target.value))}
            required
          />
          <select
            id="currency"
            className="w-4/12 p-0 absolute z-100 bottom-0 top-0 right-0 text-xs rounded-md bg-transparent"
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
            value={currency}
          >
            <option>EUR</option>
            <option>HUF</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between items-top mt-4 w-2/12 ml-4">
        <button
          className="w-16 h-8 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white border border-gray-500 hover:border-transparent rounded"
          onClick={handleSubmit}
        >
          Update
        </button>
        <button
          className="w-16 h-8 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {openDeleteModal && <DeleteModal />}
    </div>
  );
};

export default EditProduct;
