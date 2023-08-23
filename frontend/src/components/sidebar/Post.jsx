import React from "react";
import ListElement from "./ListElement";
import { v4 as uuidv4 } from "uuid";

function Post({ posts }) {
  return (
    <ul className="flex flex-col h-full">
      {posts.map((post) => {
        return <ListElement product={post} key={uuidv4()} />;
      })}
    </ul>
  );
}

export default Post;
