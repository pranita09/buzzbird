import { SecondaryButton } from "../Buttons/Buttons";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { HiLink, MdDateRange } from "../../utils/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { getPostDate } from "../../utils/getPostDate";
import { useUsers } from "../../contexts/user-context";

const ProfileDetails = ({ user }) => {
  const { currentUser } = useAuth();

  const { followUserHandler, unfollowUserHandler } = useUsers();

  const userAlreadyFollowing = user?.followers?.find(
    (user) => user.username === currentUser.username
  );

  return (
    <div className="relative flex flex-col items-center w-full border-b border-darkGrey dark:border-lightGrey">
      <img
        src={user?.backgroundImage}
        alt={user?.username + " bgImage"}
        className="h-[11.5rem] w-full object-cover"
      />
      <div className="flex flex-col w-full px-4 py-2 gap-2">
        <div className="flex justify-between w-full ">
          <UserAvatar
            user={user}
            className="absolute h-[8rem] w-[8rem] top-[6.5rem]"
          />
          <div className="flex justify-center items-center gap-4 mb-2">
            {user?.username === currentUser?.username ? (
              <>
                <SecondaryButton className="py-1 px-3 rounded">
                  Edit Profile
                </SecondaryButton>
                <SecondaryButton className="py-1 px-3 rounded hover:bg-red">
                  Logout
                </SecondaryButton>
              </>
            ) : (
              <>
                <SecondaryButton
                  className="py-1 px-3 rounded"
                  onClick={() =>
                    userAlreadyFollowing
                      ? unfollowUserHandler(user?._id)
                      : followUserHandler(user?._id)
                  }
                >
                  {userAlreadyFollowing ? "UnFollow" : "Follow"}
                </SecondaryButton>
              </>
            )}
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">
            {user?.firstName + " " + user?.lastName}
          </p>
          <span className="text-[grey] p-0">@{user?.username}</span>
        </div>
        <span>{user?.bio}</span>
        <div className="flex gap-2 items-center">
          <HiLink className="text-lg" />
          <Link to={user?.website} target="_blank">
            <span className="hover:underline cursor-pointer text-sm hover:text-[blue]">
              {user?.website?.split("/")[2]}
            </span>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <MdDateRange />
          <span className="text-sm">{getPostDate(user?.createdAt)}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:underline cursor-pointer">
            <span className="font-bold">{user?.following?.length}</span>{" "}
            Following
          </span>
          <span className="hover:underline cursor-pointer">
            <span className="font-bold">{user?.followers?.length}</span>{" "}
            Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProfileDetails };
