import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import Post from "./Post";
import { fetchProduct } from "../../state/reducers/productsReducer";

function Sidebar() {
  const dispatch = useDispatch();
  const { products, selectedID } = useSelector((state) => state.products);

  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  useEffect(() => {
    setPost(products);
  }, [products]);

  // If selected id changed, send fetch to API with product ID
  useEffect(() => {
    if (selectedID) {
      dispatch(fetchProduct(selectedID));
    }
  }, [selectedID]);

  // Send fetch selected item
  const intervalCallback = () => {
    if (selectedID) {
      console.log("send fetch", selectedID);
      dispatch(fetchProduct(selectedID));
    }
  };

  useEffect(() => {
    const timeOut = setInterval(intervalCallback, 20000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [selectedID]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="row-start-2 col-start-1 row-span-full col-span-1 bg-gray-50 py-1">
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
