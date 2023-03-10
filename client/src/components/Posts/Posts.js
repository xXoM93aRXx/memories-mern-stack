import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log("These are the posts", posts);
  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};
export default Posts;
