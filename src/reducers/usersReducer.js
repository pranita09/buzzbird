import { actionTypes } from "../utils/constants";

const initialUsersState = {
  users: [],
};

const { GET_ALL_USERS } = actionTypes;

const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export { initialUsersState, usersReducer };
