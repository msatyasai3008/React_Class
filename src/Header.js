import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="/about">About-us</Link>{" "}
      <Link to="/contact/Rajeev">Contact-us</Link> <Link to="/blog">Blogs</Link>{" "}
      <Link to="/blog-redux">BlogRedux</Link>
    </div>
  );
};
export default Header;
