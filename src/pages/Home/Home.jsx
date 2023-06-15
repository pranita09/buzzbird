import {
  NewPost,
  PostCard,
  SearchBar,
  SideBar,
  SortBar,
  SuggestedUsers,
} from "../../components";
import { useAuth } from "../../contexts/auth-context";
import { useTheme } from "../../contexts/theme-context";

const post = {
  _id: 123,
  content:
    "Stepping into the fashion scene like a style supernova! From runway inspirations to street chic, I'm here to make heads turn and trends ignite. Fashion is my canvas, and I'm painting it with confidence and flair.",
  likes: {
    likeCount: 4,
    likedBy: [],
    dislikedBy: [],
  },
  username: "jamesmurf",
  createdAt: "",
  updatedAt: "",
  comments: [],
};

const Home = () => {
  const { logoutHandler } = useAuth();
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkGrey dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
        <h1 className="text-xl text-bold p-4 sticky top-0 backdrop-blur-sm z-20 border-b border-darkGrey flex items-center justify-between">
          Home
          <div className="block xl:hidden">
            <SearchBar />
          </div>
        </h1>

        <div>
          <NewPost />
          <SortBar />
          <div>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
      <button onClick={logoutHandler}>Logout</button>
      <br />
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Theme{isDarkTheme ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export { Home };
