import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  setModalImageURL,
  setOpenImageModal,
} from "../../state/reducers/productsReducer";
import ImageModal from "./ImageModal";

export const Gallery = ({ imageContainer }) => {
  const dispatch = useDispatch();
  const { product, openImageModal } = useSelector((state) => state.products);

  const handleOpenImages = (imageURL) => {
    dispatch(setModalImageURL(imageURL));
    dispatch(setOpenImageModal(true));
  };

  const ImageGallery = () => {
    return imageContainer.map((image) => {
      return (
        <div
          key={uuidv4()}
          className="cursor-pointer w-1/4"
          onClick={() => handleOpenImages(image)}
        >
          <img src={image} alt={product.title} className="border-2" />
        </div>
      );
    });
  };

  const NoPicture = () => {
    return (
      <div className="text-center font-bold">
        <p>No pictures available</p>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-full px-4">
      {imageContainer ? (
        <div className="w-full h-full flex flex-wrap gap-2 justify-center py-2">
          <ImageGallery />
        </div>
      ) : (
        <NoPicture />
      )}
      {openImageModal && <ImageModal />}
    </div>
  );
};
