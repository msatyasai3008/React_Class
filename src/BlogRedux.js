import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchPost from "./actions";

function PostRedux() {
  const myPost = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost);
  }, []);

  return <>Blogs Redux</>;
}
export default PostRedux;

//useSlector //useDispatch
