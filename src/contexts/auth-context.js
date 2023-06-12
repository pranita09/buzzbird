import { createContext, useContext, useState } from "react";
import { loginService } from "../services/authServices";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

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
      value={{ token, currentUser, loginHandler, loading, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
