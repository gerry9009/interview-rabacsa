import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { setPaginationPage } from "../../state/reducers/productsReducer";
import { useDispatch, useSelector } from "react-redux";

function Pagination({ postsPerPage, totalPosts }) {
  const dispatch = useDispatch();
  const { paginationPage } = useSelector((state) => state.products);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    if (totalPosts.length) {
      setPageNumbers([]);
    } else {
      const pages = [];
      for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
      }

      setPageNumbers(pages);
    }
  }, [postsPerPage, totalPosts]);

  return (
    <nav className="flex justify-evenly flex-wrap">
      {pageNumbers.map((number) => {
        return (
          <button
            key={uuidv4()}
            onClick={() => {
              dispatch(setPaginationPage(number));
            }}
            className={`${
              paginationPage === number ? "text-blue-400" : "text-gray-500"
            } hover:text-blue-400 p-1 inline-flex items-center text-sm font-medium rounded-full`}
          >
            {number}
          </button>
        );
      })}
    </nav>
  );
}

export default Pagination;
