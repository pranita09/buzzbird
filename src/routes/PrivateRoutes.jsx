import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation();
  const token = "";
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export { PrivateRoutes };
