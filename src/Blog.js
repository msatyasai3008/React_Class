import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    }
    getData();
  }, []);
  console.log(posts);
  console.log("JavaScript ");
  setTimeout(console.log("data"), 5000);

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/body/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
//await , async
