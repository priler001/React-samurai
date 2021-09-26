import React from "react";
import myposts from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => <Post message={post.message} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={myposts.myposts}>
      <p>My Posts</p>
      <div>
        <textarea
          ref={newPostElement}
          className={myposts.text}
          placeholder="your news..."
        ></textarea>
        <button onClick={addPost} className={myposts.add}>
          Send
        </button>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
