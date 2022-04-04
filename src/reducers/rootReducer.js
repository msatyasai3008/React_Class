import { combineReducers } from "redux";
import fetchBlog from "./postReducer";
import testReducer from "./testReducer";

export default combineReducers({
  posts: fetchBlog,
  test: testReducer
});
