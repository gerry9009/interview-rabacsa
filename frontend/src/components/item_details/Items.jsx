import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "./Gallery";
import { fetchCurrencyRate } from "../../state/reducers/productsReducer";

const Items = () => {
  const dispatch = useDispatch();
  const { product, currencyRate } = useSelector((state) => state.products);

  const [price, setPrice] = useState();

  // fetch currency rate to change euro to huf if product changed
  useEffect(() => {
    dispatch(fetchCurrencyRate());

    if (product.price) {
      setPrice(Math.round(product.price * currencyRate));
    }
  }, [product]);

  const ItemDescription = () => {
    return (
      <>
        <div className="flex justify-center items-center">
          <p>{product.description}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Stock: {product.stock} pieces</p>
          <p>Rating: {product.rating}</p>
          <p>{price} Huf</p>
        </div>
        <Gallery imageContainer={product.images} />
      </>
    );
  };

  return (
    <div className="row-start-5 col-start-2 row-span-4 col-span-full grid grid-cols-3 gap-2 border-2 px-2">
      {product.id && <ItemDescription />}
    </div>
  );
};

export default Items;
