import React from "react";
import Item from "./Item";

function Post({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
        return <Item product={post} key={post.id} />;
      })}
    </ul>
  );
}

export default Post;
