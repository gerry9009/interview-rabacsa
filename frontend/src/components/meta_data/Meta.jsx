import React from "react";
import { useSelector } from "react-redux";

function Meta() {
  const { product } = useSelector((state) => state.products);

  const ProductDetails = () => {
    return (
      <>
        <div className="row-start-1 col-start-1 row-span-3  flex flex-col items-center justify-center">
          <p className="text-2xl font-bold">{product.title}</p>
        </div>
        <div className="row-start-1 col-start-2 row-span-3 flex border-r-2 border-l-2">
          <div className="flex flex-col w-1/2">
            <div className="flex items-end justify-center h-1/2">
              <h2 className="text-xl font-bold">Category</h2>
            </div>
            <div className="flex justify-center h-1/2">
              <p className="text-xl">{product.category}</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center w-1/2">
            <div className="flex items-end justify-center h-1/2">
              <h2 className="text-xl font-bold">Brand</h2>
            </div>
            <div className="flex justify-center h-1/2">
              <p className="text-xl">{product.brand}</p>
            </div>
          </div>
        </div>
        <div className="row-start-2 col-start-3 flex justify-center">
          {product.thumbnail && (
            <img src={product.thumbnail} alt={product.title} />
          )}
        </div>
      </>
    );
  };

  return (
    <div className="row-start-2 col-start-2 row-span-3 col-span-full grid grid-cols-3 grid-rows-3 gap-0 border-x-2">
      {product.id && <ProductDetails />}
    </div>
  );
}

export default Meta;
