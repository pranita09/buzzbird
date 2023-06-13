import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { usersReducer, initialUsersState } from "../reducers/usersReducer";
import { actionTypes } from "../utils/constants";
import { getAllUsersService } from "../services/usersServices";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    initialUsersState
  );
  const [isLoading, setIsLoading] = useState(false);

  const { GET_ALL_USERS } = actionTypes;

  const getAllUsers = async () => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { users },
      } = await getAllUsersService();
      if (status === 200) {
        usersDispatch({ type: GET_ALL_USERS, payload: users });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UsersContext.Provider value={{ usersState, usersDispatch, isLoading }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
