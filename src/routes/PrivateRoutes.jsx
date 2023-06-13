import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const PrivateRoutes = () => {
  const location = useLocation();
  const { token } = useAuth();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export { PrivateRoutes };
