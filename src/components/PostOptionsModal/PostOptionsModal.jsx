import { useAuth } from "../../contexts/auth-context";
import { useUsers } from "../../contexts/user-context";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  RiUserUnfollowFill,
} from "../../utils/icons";

const PostOptionsModal = ({ post, setShowOptions }) => {
  const { username } = post;
  const { currentUser } = useAuth();
  const {
    usersState: { users },
  } = useUsers();

  const userToFollow = users.find((user) => user.username === username);

  const userAlreadyFollowing = userToFollow.followers.find(
    (user) => user.username === currentUser.username
  );

  return (
    <div className="absolute flex flex-col right-1 top-7 w-max rounded-md shadow-lg border border-darkGrey bg-lighterPrimary">
      {username === currentUser.username ? (
        <>
          <button className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary flex items-center justify-center">
            <FaEdit className="mr-2" />
            Edit
          </button>
          <button className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary text-red flex items-center justify-center">
            <FaTrash className="mr-2 " />
            Delete
          </button>
        </>
      ) : (
        <button className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary flex items-center justify-center">
          {userAlreadyFollowing ? (
            <>
              <RiUserUnfollowFill className="mr-2 " /> Unfollow{" "}
            </>
          ) : (
            <>
              <FaUserPlus className="mr-2 " />
              Follow
            </>
          )}
        </button>
      )}
    </div>
  );
};

export { PostOptionsModal };
