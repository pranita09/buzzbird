import { SecondaryButton } from "../Buttons/Buttons";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { FaLink } from "../../utils/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const ProfileDetails = ({ user }) => {
  const { currentUser } = useAuth();
  const {
    firstName,
    lastName,
    username,
    bio,
    website,
    backgroundImage,
    following,
    followers,
  } = user;
  return (
    <div className="relative flex flex-col items-center w-full border-b border-darkGrey dark:border-lightGrey">
      <img
        src={backgroundImage}
        alt={username + " bgImage"}
        className="h-[11.5rem] w-full object-cover"
      />
      <div className="flex flex-col w-full px-4 py-2 gap-2">
        <div className="flex justify-between w-full ">
          <UserAvatar
            user={user}
            className="absolute h-[8rem] w-[8rem] top-[6.5rem]"
          />
          <div className="flex justify-center items-center gap-4 mb-2">
            <SecondaryButton className="py-1 px-3 rounded">
              Edit Profile
            </SecondaryButton>
            <SecondaryButton className="py-1 px-3 rounded hover:bg-red">
              Logout
            </SecondaryButton>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">{firstName + " " + lastName}</p>
          <span className="text-[grey] p-0">@{username}</span>
        </div>
        <span>{bio}</span>
        <div className="flex gap-2 items-center">
          <FaLink />
          <Link to={website} target="_blank">
            <span className="hover:underline cursor-pointer text-sm">
              {website.split("/")[2]}
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:underline cursor-pointer">
            <span className="font-bold">{following?.length}</span> Following
          </span>
          <span className="hover:underline cursor-pointer">
            <span className="font-bold">{followers?.length}</span> Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProfileDetails };
