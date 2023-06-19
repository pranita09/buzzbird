import { actionTypes } from "../utils/constants";

export const initialPostData = {
  input: "",
  media: null,
  mediaAlt: "",
};

const initialPostsState = {
  posts: [],
  postData: initialPostData,
  filterType: "Latest",
};

const {
  GET_ALL_POSTS,
  LIKE_POST,
  DISLIKE_POST,
  FILTER_POSTS,
  CREATE_NEW_POST,
  GET_POST_DATA,
} = actionTypes;

const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS:
      return { ...state, posts: payload };
    case CREATE_NEW_POST:
      return { ...state, posts: payload };
    case LIKE_POST:
      return { ...state, posts: payload };
    case DISLIKE_POST:
      return { ...state, posts: payload };
    case FILTER_POSTS:
      return { ...state, filterType: payload };
    case GET_POST_DATA:
      return { ...state, postData: payload };
    default:
      return state;
  }
};

export { initialPostsState, postsReducer };
