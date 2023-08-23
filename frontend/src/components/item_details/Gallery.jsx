import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  setModalImageURL,
  setOpenModal,
} from "../../state/reducers/productsReducer";
import ImageModal from "./ImageModal";

export const Gallery = ({ imageContainer }) => {
  const dispatch = useDispatch();
  const { product, openModal } = useSelector((state) => state.products);

  const handleOpenImages = (imageURL) => {
    dispatch(setModalImageURL(imageURL));
    dispatch(setOpenModal(true));
  };

  const ImageGallery = () => {
    return imageContainer.map((image) => {
      return (
        <div
          key={uuidv4()}
          className="flex w-2/12 cursor-pointer"
          onClick={() => handleOpenImages(image)}
        >
          <img src={image} alt={product.title} />
        </div>
      );
    });
  };

  return (
    <div className="w-7/12 h-full container flex items-center px-4">
      <div className="flex flex-wrap gap-2 items-center justify-end ">
        {imageContainer ? <ImageGallery /> : "No pictures available"}
      </div>
      {openModal && <ImageModal />}
    </div>
  );
};
