import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { setPaginationPage } from "../../state/reducers/productsReducer";
import { useDispatch, useSelector } from "react-redux";

function Pagination({ postsPerPage, totalPosts }) {
  const dispatch = useDispatch();
  const { paginationPage } = useSelector((state) => state.products);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [displayPages, setDisplayPages] = useState([]);
  const [startNumber, setStartNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(3);

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

  useEffect(() => {
    const slicedPageNumber = pageNumbers.slice(startNumber, lastNumber);
    setDisplayPages(slicedPageNumber);
  }, [pageNumbers, startNumber, lastNumber]);

  const handlePageNumberClick = (number) => {
    dispatch(setPaginationPage(number));
  };

  const handlePreviousBtnClick = () => {
    if (startNumber !== 0) {
      setStartNumber((cur) => cur - 1);
      setLastNumber((cur) => cur - 1);
    }
  };

  const handleNextBtnClick = () => {
    if (pageNumbers[pageNumbers.length - 1] > lastNumber) {
      setStartNumber((cur) => cur + 1);
      setLastNumber((cur) => cur + 1);
    }
  };

  const PageNumbers = () => {
    return displayPages.map((number) => {
      return (
        <button
          key={uuidv4()}
          onClick={() => {
            handlePageNumberClick(number);
          }}
          className={`${
            paginationPage === number
              ? "text-white bg-blue-400 border border-blue-400"
              : "text-gray-500 hover:text-white hover:bg-blue-200 hover:border-blue-200"
          }  w-7 flex items-center justify-center  text-sm font-medium `}
        >
          {number}
        </button>
      );
    });
  };

  const Previous = () => {
    return (
      <button onClick={handlePreviousBtnClick}>
        <svg
          className="w-6 h-full fill-current text-gray-500 hover:text-white hover:bg-blue-200 hover:border-blue-200 cursor-pointer"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    );
  };

  const Next = () => {
    return (
      <button onClick={handleNextBtnClick}>
        <svg
          className="w-6 h-full fill-current text-gray-500 hover:text-white hover:bg-blue-200 hover:border-blue-200 cursor-pointer"
          viewBox="0 0 20 20"
        >
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    );
  };

  return (
    <nav className="flex justify-center  h-10">
      {pageNumbers.length > 0 && (
        <>
          <Previous />
          <PageNumbers />
          <Next />
        </>
      )}
    </nav>
  );
}

export default Pagination;
