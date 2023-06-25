import axios from "axios";

const getAllUsersService = async () => await axios.get("/api/users");

const getUserByUsernameService = async (username) =>
  await axios.get(`/api/users/${username}`);

const getAllBookmarksService = async (encodedToken) =>
  axios.get("/api/users/bookmark", {
    headers: { authorization: encodedToken },
  });

const addBookmarkService = async (postId, encodedToken) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

const removeBookmarkService = async (postId, encodedToken) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

const followUserService = async (followUserId, encodedToken) =>
  await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

const unfollowUserService = async (followUserId, encodedToken) =>
  await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

const editUserProfileService = async (editInput, encodedToken) =>
  await axios.post(
    "/api/users/edit",
    { userData: editInput },
    { headers: { authorization: encodedToken } }
  );

export {
  getAllUsersService,
  getAllBookmarksService,
  addBookmarkService,
  removeBookmarkService,
  getUserByUsernameService,
  followUserService,
  unfollowUserService,
  editUserProfileService,
};
