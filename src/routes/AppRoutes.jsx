import { Routes, Route } from "react-router-dom";
import {
  Authentication,
  Login,
  Signup,
  Home,
  Explore,
  Bookmarks,
  UserProfile,
} from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile/:username" element={<UserProfile />} />
        </Route>
        <Route path="/auth" element={<Authentication />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export { AppRoutes };
