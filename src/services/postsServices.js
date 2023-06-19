import axios from "axios";

const getAllPostsService = async () => await axios.get("/api/posts");

const createPostService = async (content, mediaURL, mediaAlt, encodedToken) =>
  await axios.post(
    "/api/posts",
    { postData: { content, mediaURL, mediaAlt } },
    { headers: { authorization: encodedToken } }
  );

const likePostService = async (postId, encodedToken) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

const dislikePostService = async (postId, encodedToken) =>
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

export {
  getAllPostsService,
  createPostService,
  likePostService,
  dislikePostService,
};
