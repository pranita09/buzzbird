import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Loader,
  PostCard,
  ProfileDetails,
  SearchBar,
  SideBar,
  SuggestedUsers,
} from "../../components";
import { useAuth, usePosts, useUsers } from "../../index";
import { FaArrowLeft } from "../../utils/icons";
import { sortPosts } from "../../utils/sortPosts";

const UserProfile = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  const { currentUser } = useAuth();
  const {
    usersState: { user },
    getUserByUsername,
    isLoading,
  } = useUsers();
  const {
    postsState: { posts },
  } = usePosts();

  document.title = `${user?.firstName} ${user?.lastName} | BuzzBird`;

  const userPosts = posts?.filter((post) => post.username === user?.username);

  useEffect(() => {
    getUserByUsername(username);
    window.scroll({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, currentUser]);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkColor dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h1 className=" p-3 sticky top-0 backdrop-blur-md z-20 border-b border-darkGrey dark:border-lightGrey flex items-center">
              <FaArrowLeft
                className="mr-5 mx-1 cursor-pointer"
                onClick={() => navigate(-1)}
              />
              <span>
                <p className="font-bold tracking-wide">
                  {user.firstName + " " + user.lastName}
                </p>
                <p className="text-sm text-[grey]">{userPosts?.length} posts</p>
              </span>
            </h1>

            <div>
              {user ? <ProfileDetails user={user} /> : <></>}
              {isLoading ? (
                <Loader />
              ) : !user ? (
                <p className="p-4 text-center font-bold">User not found.</p>
              ) : userPosts?.length ? (
                sortPosts(userPosts, "Latest")?.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))
              ) : (
                <p className="p-4 text-center font-bold">No posts to show.</p>
              )}
            </div>
          </>
        )}
      </div>

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
    </div>
  );
};

export { UserProfile };
