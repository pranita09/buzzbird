import { actionTypes } from "../utils/constants";

const initialUsersState = {
  users: [],
  bookmarks: [],
  searchInput: "",
  user: {},
};

const {
  GET_ALL_USERS,
  GET_ALL_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SEARCH_USER,
  GET_ONE_USER,
} = actionTypes;

const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, users: payload };
    case GET_ALL_BOOKMARKS:
      return { ...state, bookmarks: payload };
    case ADD_BOOKMARK:
      return { ...state, bookmarks: payload };
    case REMOVE_BOOKMARK:
      return { ...state, bookmarks: payload };
    case SEARCH_USER:
      return { ...state, searchInput: payload };
    case GET_ONE_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export { initialUsersState, usersReducer };
