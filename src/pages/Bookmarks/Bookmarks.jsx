import {
  Loader,
  PostCard,
  SearchBar,
  SideBar,
  SuggestedUsers,
} from "../../components";
import { usePosts, useUsers } from "../../index";

const Bookmarks = () => {
  const {
    usersState: { bookmarks },
    isLoading,
  } = useUsers();
  const {
    postsState: { posts },
  } = usePosts();

  document.title = "Bookmarks | BuzzBird";

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkColor dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
        <h1 className=" p-4 sticky top-0 backdrop-blur-md z-20 border-b border-darkGrey dark:border-lightGrey flex items-center justify-between gap-4">
          <span className="text-xl font-bold">Bookmarks</span>
          <div className="block xl:hidden">
            <SearchBar />
          </div>
        </h1>

        <div>
          <div>
            {isLoading ? (
              <Loader />
            ) : bookmarks?.length > 0 ? (
              [...bookmarks]?.reverse()?.map((bookmarkPostId) => {
                const post = posts.find(({ _id }) => _id === bookmarkPostId);
                return <PostCard key={post._id} post={post} fromBookmarks />;
              })
            ) : (
              <div className="p-4 text-center text-lg font-bold">
                No Bookmarks yet.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
    </div>
  );
};

export { Bookmarks };
