import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setSearchField,
} from "../../state/reducers/productsReducer";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { defaultProducts, searchField } = useSelector(
    (state) => state.products
  );

  // handle globally, because when user set other product opportunity clear field
  // const [searchField, setSearchField] = useState("");

  const handleChangeSearchFiled = (value) => {
    dispatch(setSearchField(value));
  };

  useEffect(() => {
    const filteredProducts = defaultProducts.filter((product) => {
      const search = searchField.toLowerCase().trim();
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      const category = product.category.toLowerCase();
      const brand = product.brand.toLowerCase();

      console.log(search);
      if (
        title.includes(search) ||
        description.includes(search) ||
        category.includes(search) ||
        brand.includes(search)
      ) {
        return product;
      }
    });
    dispatch(setProducts(filteredProducts));
  }, [searchField]);

  return (
    <div className="flex w-4/12">
      <input
        type="text"
        value={searchField}
        onChange={(e) => handleChangeSearchFiled(e.target.value)}
        className="rounded-l-lg px-3 appearance-none text-xs block w-full h-8 bg-gray-200 text-gray-700 border border-gray-200 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder="Search product, category or description"
      />
      <button className="flex items-center justify-center text-white bg-gray-500 hover:bg-blue-400 px-3 rounded-r-lg">
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
