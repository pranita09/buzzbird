import { Route, Routes } from "react-router-dom";
import { ResetScroll } from "../components";
import {
  Authentication,
  Bookmarks,
  Explore,
  Home,
  Login,
  PageNotFound,
  Signup,
  SinglePost,
  UserProfile,
} from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";

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
