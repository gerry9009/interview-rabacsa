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
          className="cursor-pointer"
          onClick={() => handleOpenImages(image)}
        >
          <img src={image} alt={product.title} />
        </div>
      );
    });
  };

  return (
    <div className="container flex items-center px-4">
      <div className="grid grid-cols-3 gap-2">
        {imageContainer ? <ImageGallery /> : "No pictures available"}
      </div>
      {openImageModal && <ImageModal />}
    </div>
  );
};
