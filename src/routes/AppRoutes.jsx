import { Routes, Route, Navigate } from "react-router-dom";
import { Authentication } from "../pages/authentication/Authentication";
import { Login } from "../pages/authentication/formComponents/Login";
import { Signup } from "../pages/authentication/formComponents/Signup";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth" element={<Authentication />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export { AppRoutes };
