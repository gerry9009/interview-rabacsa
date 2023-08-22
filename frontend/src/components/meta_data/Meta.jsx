import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../state/reducers/productsReducer";

function Meta() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);

  const handleDelete = () => {
    dispatch(deleteItem(product.id));
  };

  const ProductDetails = () => {
    return (
      <>
        <div className="row-start-1 col-start-1 row-span-3  flex flex-col items-center justify-center">
          <p className="text-xl">{product.title}</p>
        </div>
        <div className="row-start-1 col-start-2 row-span-3 flex">
          <div className="flex flex-col text-center justify-center w-1/2">
            <h2 className="text-lg underline">Category:</h2>
            <p className="text-lg">{product.category}</p>
          </div>
          <div className="flex flex-col text-center justify-center w-1/2">
            <h2 className="text-lg underline">Brand:</h2>
            <p className="text-lg">{product.brand}</p>
          </div>
        </div>
        <div className="row-start-2 col-start-3 flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-4/6"
          />
        </div>
        <div className="row-start-1 col-start-3 flex justify-center items-center">
          <button
            className="row-start-3 col-start-3 bg-red-500 hover:bg-red-700 text-white rounded px-1 py-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="row-start-2 col-start-2 row-span-3 col-span-full grid grid-cols-3 grid-rows-3 gap-0 p-1 border-x-2">
      {product.id && <ProductDetails />}
    </div>
  );
}

export default Meta;
