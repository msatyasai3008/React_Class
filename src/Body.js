import React, { useEffect, useState } from "react";
import axios from "axios";

function Body(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      );
      setPost(response.data);
    }
    getData();
  }, []);
  console.log(props);
  console.log(post.body);

  return (
    <>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </>
  );
}
export default Body;

// async awaitsli
