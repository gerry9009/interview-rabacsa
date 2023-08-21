import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import Pagination from "./Pagination";

function Sidebar() {
  const { products } = useSelector((state) => state.products);

  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    setPost(products);
  }, [products]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    console.log(number);
    setCurrentPage(number);
  };

  return (
    <div className="sidebar border">
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Post posts={currentPost} />
    </div>
  );
}

export default Sidebar;
