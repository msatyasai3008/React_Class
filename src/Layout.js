import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import App from "./App";
import Contact from "./Contact";
import Header from "./Header";
import Blog from "./Blog";
import Body from "./Body";
import BlogRedux from "./BlogRedux";
const Layout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-redux" component={BlogRedux} />
        <Route path="/body/:id" component={Body} />
        <Route path="/contact/:name" component={Contact} />
      </Switch>
    </>
  );
};
export default Layout;
