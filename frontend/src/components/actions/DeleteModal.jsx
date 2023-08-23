import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  setEditProduct,
  setOpenDeleteModal,
} from "../../state/reducers/productsReducer";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { editProduct, products } = useSelector((state) => state.products);

  const closeModal = () => {
    dispatch(setOpenDeleteModal(false));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem(editProduct.id));
    dispatch(setOpenDeleteModal(false));
    dispatch(setEditProduct(products[0]));
  };

  const closeBtnStyle =
    "absolute top-5 right-5 bg-white rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500";

  const modalWindowStyle =
    "fixed left-0 top-0 z-10 h-full w-full outline-none bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center";

  const CloseButton = () => {
    return (
      <button className={closeBtnStyle} onClick={closeModal}>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className={modalWindowStyle}>
      <CloseButton />
      <h2 className="mb-16 text-4xl font-bold text-gray-100 tracking-wide">
        Do you want to remove {editProduct.title} from the list?
      </h2>
      <div className="flex w-4/12 items-center justify-around">
        <button
          onClick={handleDeleteItem}
          className="w-28 h-10 text-2xl bg-transparent hover:bg-red-500 bg-red-700 text-white font-semibold border hover:border-red-500 border-red-700 rounded"
        >
          Yes
        </button>
        <button
          onClick={closeModal}
          className="w-28 h-10 text-2xl bg-transparent hover:bg-green-500 bg-green-700 text-white font-semibold border hover:border-green-500 border-green-700 rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
