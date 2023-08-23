import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenImageModal } from "../../state/reducers/productsReducer";

const ImageModal = () => {
  const dispatch = useDispatch();
  const { modalImageURL, product } = useSelector((state) => state.products);

  const closeModal = () => {
    dispatch(setOpenImageModal(false));
  };

  const btnStyle =
    "absolute top-5 right-5 bg-white rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500";

  const modalWindowStyle =
    "fixed left-0 top-0 z-10 h-full w-full outline-none bg-gray-900 bg-opacity-70 flex justify-center items-center";

  const CloseButton = () => {
    return (
      <button className={btnStyle} onClick={closeModal}>
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
    <div className={modalWindowStyle} onClick={closeModal}>
      <CloseButton />
      <img src={modalImageURL} alt={product.title} className="max-h-full" />
    </div>
  );
};

export default ImageModal;
