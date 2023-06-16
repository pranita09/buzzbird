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
import { usePosts } from "../../contexts/post-context";

const Home = () => {
  const { currentUser, logoutHandler } = useAuth();
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  const {
    postsState: { posts },
    isLoading,
  } = usePosts();

  // const followingusers = currentUser?.following;

  // const postsOfFollowingUsers = posts?.filter(
  //   (post) =>
  //     followingusers.some(
  //       (followingUser) => followingUser.username === post.username
  //     ) || currentUser.username === post.username
  // );

  const postsOfFollowingUsers = posts?.filter((post) =>
    currentUser?.following?.find(
      (user) =>
        user.username === post.username ||
        currentUser?.username === post.username
    )
  );

  console.log(postsOfFollowingUsers);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkGrey dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
        <h1 className=" p-4 sticky top-0 backdrop-blur-md z-20 border-b border-darkGrey dark:border-lightGrey flex items-center justify-between">
          <span className="text-xl font-bold">Home</span>
          <div className="block xl:hidden">
            <SearchBar />
          </div>
        </h1>

        <div>
          <NewPost />
          <SortBar />
          <div>
            {isLoading ? (
              "Loader"
            ) : postsOfFollowingUsers?.length > 0 ? (
              postsOfFollowingUsers?.map((post) => (
                <PostCard key={post._id} post={post} />
              ))
            ) : (
              <div className="p-4 text-center text-lg font-bold">
                No posts yet.
              </div>
            )}
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
