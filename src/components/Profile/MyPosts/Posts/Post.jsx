import React from "react";
import post from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={post.item}>
      <article className={post.avatar}></article>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
