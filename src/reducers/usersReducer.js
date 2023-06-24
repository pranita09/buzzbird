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
  UPDATE_FOLLOW_USER,
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
    case UPDATE_FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          const updatedUser = payload.find(({ _id }) => _id === user._id);
          return updatedUser ? updatedUser : user;
        }),
      };
    default:
      return state;
  }
};

export { initialUsersState, usersReducer };
