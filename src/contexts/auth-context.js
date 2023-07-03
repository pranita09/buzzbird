import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [loading, setIsLoading] = useState(false);

  const loginHandler = async ({ username, password }) => {
    setIsLoading(true);
    try {
      const response = await loginService(username, password);
      const {
        status,
        data: { encodedToken, foundUser },
      } = response;
      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        toast.success(`Welcome back, ${foundUser.firstName}!`, { icon: "👋" });
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 404) {
        toast.error("The username you entered is not registered.");
      } else if (status === 401) {
        toast.error(
          "The credentials you entered are invalid. Please try again."
        );
      } else {
        toast.error("Something went wrong");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signupHandler = async ({ firstName, lastName, username, password }) => {
    setIsLoading(true);
    try {
      const response = await signupService(
        firstName,
        lastName,
        username,
        password
      );
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);
        toast.success(`Hi, ${createdUser.firstName}!`, {
          icon: "👋",
        });
        navigate("/", { replace: true });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 422) {
        toast.error("Username Already Exists. Please choose another one.");
      } else {
        toast.error("Something went wrong");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setToken(null);
    setCurrentUser(null);
    toast.success("Logged out successfully!");
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        setCurrentUser,
        loginHandler,
        loading,
        logoutHandler,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
