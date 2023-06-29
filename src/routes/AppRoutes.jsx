import { Routes, Route } from "react-router-dom";
import {
  Authentication,
  Login,
  Signup,
  Home,
  Explore,
  Bookmarks,
  UserProfile,
  SinglePost,
  PageNotFound,
} from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";
import { ResetScroll } from "../components";

const AppRoutes = () => {
  return (
    <div>
      <ResetScroll>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/profile/:username" element={<UserProfile />} />
            <Route path="/post/:postId" element={<SinglePost />} />
          </Route>
          <Route path="/auth" element={<Authentication />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ResetScroll>
    </div>
  );
};

export { AppRoutes };
