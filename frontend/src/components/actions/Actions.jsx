import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../state/reducers/productsReducer";
import { v4 as uuidv4 } from "uuid";

function Actions() {
  const dispatch = useDispatch();
  const { product, categories } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="col-start-2 col-span-full row-start-8 row-span-1 bg-gray-100">
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
          />
        </div>
        <label>
          <p>Description</p>
          <input type="text" />
        </label>
        <label>
          <p>Price</p>
          <input type="text" />
        </label>
        <label>
          <p>Rating</p>
          <input type="number" min="1" max="5" />
        </label>
        <label>
          <p>Stock</p>
          <input type="number" min="0" />
        </label>
        <label>
          <p>Brand</p>
          <input type="text" />
        </label>
        <label>
          <select>
            {categories.map((category) => (
              <option key={uuidv4()}>{category}</option>
            ))}
          </select>
        </label>
        <input
          type="submit"
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        />
      </div>
    </div>
  );
}

export default Actions;
