import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { fetchCategories } from "../../state/reducers/productsReducer";

function NewProduct() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
        <input className={inputStyle} id="title" type="text" />
      </div>

      <div>
        <label className={labelStyle} htmlFor="description">
          Description
        </label>
        <textarea className={inputStyle} type="text" id="description" />
      </div>

      <div className="min-w-16">
        <label className={labelStyle} htmlFor="price">
          Price
        </label>
        <input className={inputStyle} type="text" id="price" />
      </div>

      <div className="min-w-16">
        <label className={labelStyle} htmlFor="rating">
          Rating
        </label>
        <input
          className={inputStyle}
          type="number"
          min="1"
          max="5"
          id="rating"
        />
      </div>

      <div className="min-w-16">
        <label className={labelStyle} htmlFor="stock">
          Stock
        </label>
        <input className={inputStyle} type="number" min="0" id="stock" />
      </div>

      <div className="min-w-32">
        <label className={labelStyle} htmlFor="brand">
          Brand
        </label>
        <input type="text" id="brand " className={inputStyle} />
      </div>

      <div className="min-w-32">
        <label className={labelStyle} htmlFor="category">
          Category
        </label>
        <select className={inputStyle} id="category">
          {categories.map((category) => (
            <option key={uuidv4()}>{category}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-center items-center mb-2">
        <button
          type="submit"
          className="w-16 h-9 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white border border-gray-500 hover:border-transparent rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default NewProduct;
