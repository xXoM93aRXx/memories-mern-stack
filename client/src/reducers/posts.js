import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      //Action payload in this case is the updated post, the next function checks if the post id is equal to the id of the updated post, then it returns the updated post, other than that it just returns the post as it is
      return posts.map((post) =>
        post.id === action.payload._id ? action.payload : post
      );

    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];

    default:
      return posts;
  }
};
