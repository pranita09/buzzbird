import { Link, NavLink } from "react-router-dom";
import { logoImg } from "../utils/constants";
import { MdHome, MdExplore, MdBookmark, MdPerson } from "react-icons/md";
import { HiPlusCircle, HiDotsHorizontal } from "react-icons/hi";
import { PrimaryButton } from "./Buttons";
import { UserAvatar } from "./UserAvatar";

const user = {
  _id: "LCrc9f0Zl0",
  firstName: "Aditya",
  lastName: "Joshi",
  password: "aditya123",
  username: "adityaj",
  bio: "Composing musical journeys",
  website: "https://adityajoshi.com",
  profileAvatar:
    "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
  backgroundImage:
    "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686342526/socialMedia/musician-bg_qgesca.jpg",

  following: [],
  followers: [],
  bookmarks: [],
};

const SideBar = () => {
  const activeStyle = {
    width: "max-content",
    fontWeight: "bold",
    transform: "scale(1.05)",
  };

  return (
    <aside className=" flex sm:sticky sm:flex-col sm:justify-between sm:h-screen sm:top-0 sm:overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 w-full items-center sm:border-0 border-t-2 border-darkGrey dark:border-lightGrey dark:text-lightGrey sm:z-0 z-40 ">
      <ul className="flex items-center sm:items-start justify-around sm:justify-start px-3 py-1 sm:py-4 sm:flex-col gap-3 sm:gap-4 tracking-wide grow">
        <li className="sm:pb-3 sm:px-3 hidden sm:block">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="buzzbird" className="h-12 w-12 mr-1" />
            <span className="text-xl hidden lg:inline">BuzzBird</span>
          </Link>
        </li>

        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor"
          >
            <MdHome className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor"
          >
            <MdExplore className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Explore</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor"
          >
            <MdBookmark className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Bookmarks</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor"
          >
            <MdPerson className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Profile</span>
          </NavLink>
        </li>

        <li className=" sm:flex px-0 sm:px-1 lg:p-0 w-max lg:w-full">
          <HiPlusCircle className="px-2 text-[2.75rem] hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor lg:hidden" />
          <PrimaryButton className="mx-2 rounded-lg w-max lf:w-full py-1 pl-2 pr-4  justify-center items-center hidden lg:flex">
            <HiPlusCircle className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline lg:pr-2">New Post</span>
          </PrimaryButton>
        </li>

        <li className="flex p-2 w-max sm:hidden">
          <UserAvatar className="h-8 w-8" user={user} />
        </li>
      </ul>

      <ul className="hidden sm:flex tracking-wide pr-2">
        <li className="p-3 w-max flex items-center justify-center gap-2">
          <UserAvatar className="h-10 w-10" user={user} />
          <div className="hidden text-sm lg:inline">
            <p className="font-bold">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="font-normal">@{user?.username}</p>
          </div>
          <HiDotsHorizontal className="ml-4 hidden lg:inline" />
        </li>
      </ul>
    </aside>
  );
};

export { SideBar };
