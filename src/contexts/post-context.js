import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../index";
import { initialPostsState, postsReducer } from "../reducers/postsReducer";
import {
  addCommentService,
  createPostService,
  deleteCommentService,
  deletePostService,
  dislikePostService,
  editCommentService,
  editPostService,
  getAllPostsService,
  getSinglePostService,
  likePostService,
} from "../services/postsServices";
import { actionTypes } from "../utils/constants";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { token } = useAuth();

  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostsState
  );
  const [isLoading, setIsLoading] = useState(false);

  const {
    GET_ALL_POSTS,
    LIKE_POST,
    DISLIKE_POST,
    CREATE_NEW_POST,
    DELETE_POST,
    EDIT_POST,
    GET_SINGLE_POST,
    ADD_NEW_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
  } = actionTypes;

  const getAllPosts = async () => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { posts },
      } = await getAllPostsService();
      if (status === 200) {
        postsDispatch({ type: GET_ALL_POSTS, payload: posts });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createPostHandler = async ({ content, media, mediaAlt }) => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { posts },
      } = await createPostService(content, media, mediaAlt, token);
      if (status === 201) {
        postsDispatch({ type: CREATE_NEW_POST, payload: posts });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const deletePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await deletePostService(postId, token);
      if (status === 201) {
        postsDispatch({ type: DELETE_POST, payload: posts });
        toast.success("Post deleted successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, try again");
    }
  };

  const editPostHandler = async (postId, { content, media, mediaAlt }) => {
    try {
      const {
        status,
        data: { posts },
      } = await editPostService(postId, content, media, mediaAlt, token);
      if (status === 201) {
        postsDispatch({ type: EDIT_POST, payload: posts });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const likePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await likePostService(postId, token);
      if (status === 201) {
        postsDispatch({ type: LIKE_POST, payload: posts });
        toast.success("Liked a post");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Cannot like a post that is already liked.");
      } else {
        console.error(error);
        toast.error("Something went wrong");
      }
    }
  };

  const dislikePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await dislikePostService(postId, token);
      if (status === 201) {
        postsDispatch({ type: DISLIKE_POST, payload: posts });
        toast.success("Unliked the post");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Cannot like a post that is already liked.");
      } else {
        console.error(error);
        toast.error("Something went wrong");
      }
    }
  };

  const getSinglePost = async (postId) => {
    try {
      const {
        status,
        data: { post },
      } = await getSinglePostService(postId);
      if (status === 200) {
        postsDispatch({ type: GET_SINGLE_POST, payload: post });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addCommentHandler = async (postId, commentData) => {
    try {
      const {
        status,
        data: { posts },
      } = await addCommentService(postId, commentData, token);
      if (status === 201) {
        postsDispatch({ type: ADD_NEW_COMMENT, payload: posts });
        toast.success("Posted comment successfully.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const editCommentHandler = async (postId, commentId, commentData) => {
    try {
      const {
        status,
        data: { posts },
      } = await editCommentService(postId, commentId, commentData, token);
      if (status === 201) {
        postsDispatch({ type: EDIT_COMMENT, payload: posts });
        toast.success("Updated comment successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const deleteCommentHandler = async (postId, commentId) => {
    try {
      const {
        status,
        data: { posts },
      } = await deleteCommentService(postId, commentId, token);
      if (status === 201) {
        postsDispatch({ type: DELETE_COMMENT, payload: posts });
        toast.success("Comment deleted.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  const likedByLoggedUser = (post, user) => {
    return post?.likes?.likedBy?.find(
      (likeUser) => likeUser.username === user.username
    );
  };

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostsContext.Provider
      value={{
        postsState,
        postsDispatch,
        isLoading,
        likePostHandler,
        dislikePostHandler,
        likedByLoggedUser,
        createPostHandler,
        deletePostHandler,
        editPostHandler,
        getSinglePost,
        addCommentHandler,
        editCommentHandler,
        deleteCommentHandler,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
