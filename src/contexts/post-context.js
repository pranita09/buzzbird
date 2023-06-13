import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialPostsState, postsReducer } from "../reducers/postsReducer";
import { getAllPostsService } from "../services/postsServices";
import { actionTypes } from "../utils/constants";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostsState
  );
  const [isLoading, setIsLoading] = useState(false);

  const { GET_ALL_POSTS } = actionTypes;

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

  console.log(postsState.posts);

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch, isLoading }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
