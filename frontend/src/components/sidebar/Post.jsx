import React from "react";
import ListElement from "./ListElement";

function Post({ posts }) {
  return (
    <ul className="flex flex-col h-full">
      {posts.map((post) => {
        return <ListElement product={post} key={post.id} />;
      })}
    </ul>
  );
}

export default Post;
