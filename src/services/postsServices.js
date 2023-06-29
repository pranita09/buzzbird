import axios from "axios";

const getAllPostsService = async () => await axios.get("/api/posts");

const getSinglePostService = async (postId) =>
  await axios.get(`/api/posts/${postId}`);

const createPostService = async (content, mediaURL, mediaAlt, encodedToken) =>
  await axios.post(
    "/api/posts",
    { postData: { content, mediaURL, mediaAlt } },
    { headers: { authorization: encodedToken } }
  );

const deletePostService = async (postId, encodedToken) =>
  await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: encodedToken },
  });

const editPostService = async (
  postId,
  content,
  mediaURL,
  mediaAlt,
  encodedToken
) =>
  await axios.post(
    `/api/posts/edit/${postId}`,
    { postData: { content, mediaURL, mediaAlt } },
    {
      headers: { authorization: encodedToken },
    }
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

const addCommentService = async (postId, commentData, encodedToken) =>
  await axios.post(
    `/api/comments/add/${postId}`,
    { commentData: commentData },
    { headers: { authorization: encodedToken } }
  );

const editCommentService = async (
  postId,
  commentId,
  commentData,
  encodedToken
) =>
  await axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData: commentData },
    { headers: { authorization: encodedToken } }
  );

const deleteCommentService = async (postId, commentId, encodedToken) =>
  await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

export {
  getAllPostsService,
  createPostService,
  editPostService,
  deletePostService,
  likePostService,
  dislikePostService,
  getSinglePostService,
  addCommentService,
  editCommentService,
  deleteCommentService,
};
