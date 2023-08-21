import React, { useEffect, useState } from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
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
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number + Math.floor(Math.random() * 1000)}>
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
