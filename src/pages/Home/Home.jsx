import { PostCard } from "../../components";
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
    <div className="dark:bg-darkGrey dark:text-lightGrey transition-all duration-500 min-h-screen">
      <PostCard post={post} />
      <br />
      <br />
      <button onClick={logoutHandler}>Logout</button>
      <br />
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Theme{isDarkTheme ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export { Home };
