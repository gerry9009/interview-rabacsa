import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "./Gallery";
import { fetchCurrencyRate } from "../../state/reducers/productsReducer";
import numberSeparation from "../utils/numberFormatter";

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

  const valueNameStyle =
    "w-1/2 p-2 border-r-2 flex justify-start items-center font-bold";
  const valueStyle = "flex justify-center items-center w-1/2";

  const ItemDescription = () => {
    return (
      <>
        <div className="w-1/4 flex flex-col justify-center items-center">
          <div className="h-1/4 flex justify-center items-center font-bold ">
            <p>Description</p>
          </div>
          <div className="h-3/4 w-full flex justify-center px-6 py-9 border-t-2">
            <p>{product.description}</p>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-center border-l-2 border-r-2">
          <div className="w-full flex h-1/4">
            <div className={valueNameStyle}>
              <p>Available Stock</p>
            </div>
            <div className={valueStyle}>
              <p>{product.stock}</p>
            </div>
          </div>
          <div className="w-full flex h-1/4 border-t-2">
            <div className={valueNameStyle}>
              <p>Rating</p>
            </div>
            <div className={valueStyle}>
              <p>{product.rating}</p>
            </div>
          </div>

          <div className="w-full flex h-1/4 border-t-2">
            <div className={valueNameStyle}>
              <p>Price in EURO</p>
            </div>
            <div className={valueStyle}>
              <p>{product.price} EUR</p>
            </div>
          </div>

          <div className="w-full flex h-1/4 border-t-2">
            <div className={valueNameStyle && numberSeparation(valueNameStyle)}>
              <p>Price in HUF</p>
            </div>
            <div className={valueStyle}>
              <p>{price && numberSeparation(price)} HUF</p>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <Gallery imageContainer={product.images} />
        </div>
      </>
    );
  };

  return (
    <div className="row-start-5 col-start-2 row-span-4 col-span-full flex border-l-2 border-r-2 border-t-4">
      {product.id && <ItemDescription />}
    </div>
  );
};

export default Items;
