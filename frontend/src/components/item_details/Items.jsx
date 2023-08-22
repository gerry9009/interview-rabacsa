import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Items = () => {
  const { product } = useSelector((state) => state.products);

  const [price, setPrice] = useState();

  useEffect(() => {
    const fetchCurrencyRate = async () => {
      const res = await axios.get(
        "https://economia.awesomeapi.com.br/last/EUR-HUF"
      );
      const currencyRate = res.data.EURHUF.high;

      if (product.price) {
        setPrice(Math.round(product.price * currencyRate));
      }
    };

    fetchCurrencyRate();
  }, [product]);

  const ItemDescription = () => {
    return (
      <>
        <div className="w-1/6">
          <p>{product.description}</p>
        </div>
        <div>
          <p>Stock: {product.stock} pieces</p>
          <p>Rating: {product.rating}</p>
          <p>{price} Huf</p>
        </div>
        {product.images && (
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-3/6 max-h-full"
          />
        )}
      </>
    );
  };

  return (
    <div className="row-start-5 col-start-2 row-span-4 col-span-full flex justify-between items-center border-2 px-2">
      {product.id && <ItemDescription />}
    </div>
  );
};

export default Items;
