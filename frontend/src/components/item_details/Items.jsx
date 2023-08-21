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

  return (
    <div className="item-details border">
      <p>{product.description}</p>
      <p>{product.stock}</p>
      <p>{product.rating}</p>
      <p>{price}</p>
      {product.images && <img src={product.images[0]} alt={product.title} />}
    </div>
  );
};

export default Items;
