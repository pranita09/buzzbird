import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialPostsState, postsReducer } from "../reducers/postsReducer";
import {
  createPostService,
  dislikePostService,
  getAllPostsService,
  likePostService,
} from "../services/postsServices";
import { actionTypes } from "../utils/constants";
import { useAuth } from "./auth-context";
import { toast } from "react-hot-toast";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { token } = useAuth();
  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostsState
  );
  const [isLoading, setIsLoading] = useState(false);

  const { GET_ALL_POSTS, LIKE_POST, DISLIKE_POST, CREATE_NEW_POST } =
    actionTypes;

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
        toast.success("Disliked the post");
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

  const likedByLoggedUser = (post, user) =>
    post?.likes.likedBy.find((likeUser) => likeUser.username === user.username);

  const filteredPosts = (posts) => {
    if (postsState.filterType) {
      if (postsState.filterType === "Trending") {
        return posts.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
      } else if (postsState.filterType === "Latest") {
        return posts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      } else if (postsState.filterType === "Oldest") {
        return posts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      }
    } else {
      return posts;
    }
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
        filteredPosts,
        createPostHandler,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
