import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import Post from "./Post";
import { fetchProduct } from "../../state/reducers/productsReducer";

function Sidebar() {
  const dispatch = useDispatch();
  const { products, selectedID, viewCategories, categories, paginationPage } =
    useSelector((state) => state.products);

  const [posts, setPost] = useState([]);
  // handle globally the selected page, because easier set value to default
  // const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const [postsCategories, setPostCategories] = useState([]);

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
      dispatch(fetchProduct(selectedID));
    }
  };

  useEffect(() => {
    const timeOut = setInterval(intervalCallback, 20000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [selectedID]);

  // Set categories
  useEffect(() => {
    setPostCategories(categories);
  }, [categories]);

  const indexOfLastPost = paginationPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // if categories view selected, set categories to the list, if not set products
  const currentPost = viewCategories
    ? categories.slice(indexOfFirstPost, indexOfLastPost)
    : posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="row-start-2 col-start-1 row-span-full col-span-1 bg-gray-50">
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={viewCategories ? postsCategories.length : posts.length}
      />
      <Post posts={currentPost} />
    </div>
  );
}

export default Sidebar;
