const initialState = {
  post: [""]
};
const fetchBlog = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHPOST":
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
};
export default fetchBlog;
