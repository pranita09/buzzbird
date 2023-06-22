import { useNavigate, useParams } from "react-router-dom";
import {
  PostCard,
  ProfileDetails,
  SearchBar,
  SideBar,
  SuggestedUsers,
} from "../../components";
import { useUsers } from "../../contexts/user-context";
import { usePosts } from "../../contexts/post-context";
import { FaArrowLeft } from "../../utils/icons";

const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const {
    usersState: { users },
  } = useUsers();
  const {
    postsState: { posts },
    isLoading,
  } = usePosts();

  const user = users?.find((user) => user.username === username);
  const userPosts = posts?.filter((post) => post.username === username);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkGrey dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
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
            "Loader"
          ) : !user ? (
            <p className="p-4 text-center font-bold">User not found.</p>
          ) : userPosts?.length ? (
            [...userPosts]?.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <p className="p-4 text-center font-bold">No posts to show.</p>
          )}
        </div>
      </div>

      <div className="hidden xl:block z-[-1]">
        <SearchBar />
        <SuggestedUsers />
      </div>
    </div>
  );
};

export { UserProfile };
