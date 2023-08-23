import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  fetchCategories,
  postProduct,
} from "../../state/reducers/productsReducer";

function NewProduct() {
  const dispatch = useDispatch();
  const { categories, currencyRate } = useSelector((state) => state.products);

  const [values, setValues] = useState({
    title: "",
    description: "",
    brand: "",
    price: "0",
    rating: "1",
    stock: "0",
    category: categories[0],
  });
  const [initializeState, setInitializeState] = useState();
  const [currency, setCurrency] = useState("EUR");

  useEffect(() => {
    dispatch(fetchCategories());
    setInitializeState({
      title: "",
      description: "",
      brand: "",
      price: "0",
      rating: "1",
      stock: "0",
      category: categories[0],
    });
  }, []);

  const handleChangeValue = (key, value) => {
    const num = Number(value);
    switch (key) {
      case "price":
        if (num >= 0) {
          setValues({ ...values, [key]: value });
        }
        break;
      case "rating":
        if (num > 0 && num <= 5) {
          setValues({ ...values, [key]: value });
        }
        break;
      case "stock":
        if (num >= 0) {
          setValues({ ...values, [key]: value });
        }
        break;
      default:
        setValues({ ...values, [key]: value });
    }
  };

  const handleSubmitButton = () => {
    if (values.title.length < 3) {
      alert("Minimum 3 characters required in title form input");
    } else if (values.description.length < 10) {
      alert("Minimum 10 characters required in description form input");
    } else if (values.brand.length < 3) {
      alert("Minimum 3 characters required in brand form input");
    } else {
      if (currency === "HUF") {
        const data = values;
        data.price = Math.round(data.price / currencyRate);
        dispatch(postProduct(data));
      } else {
        dispatch(postProduct(values));
      }
      setValues(initializeState);
    }
  };

  const labelStyle =
    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2";
  const inputStyle =
    "appearance-none text-xs block w-full h-9 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

  return (
    <div className="flex justify-between gap-2 h-full px-1 py-2">
      <div className="min-w-32">
        <label className={labelStyle} htmlFor="title">
          Title
        </label>
        <input
          className={inputStyle}
          id="title"
          type="text"
          value={values.title}
          onChange={(e) => handleChangeValue("title", e.target.value)}
          required
        />
      </div>

      <div className="min-w-32">
        <label className={labelStyle} htmlFor="description">
          Description
        </label>
        <textarea
          className={inputStyle}
          type="text"
          id="description"
          value={values.description}
          onChange={(e) => handleChangeValue("description", e.target.value)}
          required
        />
      </div>

      <div className="w-25">
        <label className={labelStyle} htmlFor="price">
          Price
        </label>
        <div className="relative">
          <input
            className={`${inputStyle} pl-3 pr-10`}
            type="text"
            id="price"
            value={values.price}
            onChange={(e) => handleChangeValue("price", Number(e.target.value))}
            required
          />
          <select
            id="currency"
            className="w-4/12 p-0 absolute z-100 bottom-0 top-0 right-0 text-xs rounded-md bg-transparent"
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
            value={currency}
          >
            <option>EUR</option>
            <option>HUF</option>
          </select>
        </div>
      </div>

      <div className="w-16">
        <label className={labelStyle} htmlFor="rating">
          Rating
        </label>
        <input
          className={inputStyle}
          type="number"
          step="0.1"
          id="rating"
          min="1"
          value={values.rating}
          onChange={(e) =>
            handleChangeValue("rating", parseFloat(e.target.value))
          }
          required
        />
      </div>

      <div className="w-16">
        <label className={labelStyle} htmlFor="stock">
          Stock
        </label>
        <input
          className={inputStyle}
          type="number"
          min="0"
          id="stock"
          value={values.stock}
          onChange={(e) => handleChangeValue("stock", Number(e.target.value))}
          required
        />
      </div>

      <div className="min-w-32">
        <label className={labelStyle} htmlFor="brand">
          Brand
        </label>
        <input
          type="text"
          id="brand "
          className={inputStyle}
          value={values.brand}
          onChange={(e) => handleChangeValue("brand", e.target.value)}
          required
        />
      </div>

      <div className="min-w-32">
        <label className={labelStyle} htmlFor="category">
          Category
        </label>
        <select
          className={inputStyle}
          id="category"
          onChange={(e) => handleChangeValue("category", e.target.value)}
          value={values.category}
        >
          {categories.map((category) => (
            <option key={uuidv4()}>{category}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-center items-center mb-2">
        <input
          type="submit"
          className="w-16 h-9 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white border border-gray-500 hover:border-transparent rounded"
          onClick={handleSubmitButton}
          value="Send"
        />
      </div>
    </div>
  );
}

export default NewProduct;
