import { Modal } from "@mui/material";
import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PostModal, PrimaryButton, SettingsModal, UserAvatar } from "..";
import { useAuth } from "../../index";
import { logoImg } from "../../utils/constants";
import {
  HiDotsHorizontal,
  HiPlusCircle,
  MdBookmarks,
  MdExplore,
  MdHome,
  MdPerson,
} from "../../utils/icons";

const SideBar = () => {
  const { currentUser } = useAuth();

  const [showPostModal, setShowPostModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const activeStyle = {
    fontWeight: "bold",
    transform: "scale(1.05)",
  };

  return (
    <aside className=" flex bg-[white] dark:bg-darkColor sm:sticky sm:flex-col sm:justify-between sm:h-screen sm:top-0 sm:overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 w-full items-center sm:border-0 border-t-2 border-darkGrey dark:border-lightGrey dark:text-lightGrey sm:z-0 z-40 ">
      <ul className="flex items-center sm:items-start justify-around sm:justify-start px-2 py-1 sm:py-4 sm:flex-col gap-3 sm:gap-2 tracking-wide grow">
        <li className="sm:pb-2 sm:px-1 hidden sm:block">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="buzzbird" className="h-12 w-12 mr-2" />
            <span className="text-2xl font-semibold hidden lg:inline">
              BuzzBird
            </span>
          </Link>
        </li>

        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lighterPrimary dark:hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor active:dark:text-darkColor"
          >
            <MdHome className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lighterPrimary dark:hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor dark:active:text-darkColor"
          >
            <MdExplore className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Explore</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/bookmarks"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lighterPrimary dark:hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor dark:active:text-darkColor"
          >
            <MdBookmarks className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Bookmarks</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={`/profile/${currentUser?.username}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-2 lg:py-1 lg:pl-2 lg:pr-4 w-max flex justify-center items-center hover:bg-lighterPrimary dark:hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor dark:active:text-darkColor"
          >
            <MdPerson className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline">Profile</span>
          </NavLink>
        </li>

        <li
          className=" sm:flex px-0 sm:px-1 lg:p-0 w-max lg:w-full cursor-pointer"
          onClick={() => setShowPostModal(true)}
        >
          <HiPlusCircle className="px-2 text-[2.75rem] hover:bg-lighterPrimary dark:hover:bg-lightPrimary hover:rounded-full  dark:hover:text-darkColor lg:hidden" />
          <PrimaryButton className="mx-2 rounded-lg w-max lf:w-full py-1 pl-2 pr-4  justify-center items-center hidden lg:flex">
            <HiPlusCircle className="px-0.5 text-3xl lg:pr-2" />
            <span className="hidden lg:inline lg:pr-2">New Post</span>
          </PrimaryButton>
        </li>

        <li
          className="flex p-2 w-max sm:hidden"
          onClick={() => setShowSettingsModal(true)}
        >
          <UserAvatar className="h-8 w-8" user={currentUser} />
        </li>
      </ul>

      <ul className="hidden sm:flex pr-2">
        <li
          className="p-3 w-max flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => setShowSettingsModal(true)}
        >
          <UserAvatar className="h-10 w-10" user={currentUser} />
          <div className="hidden text-sm lg:inline">
            <p className="font-bold">
              {currentUser?.firstName + " " + currentUser?.lastName}
            </p>
            <p className="font-normal">@{currentUser?.username}</p>
          </div>
          <HiDotsHorizontal
            className="ml-4 hidden lg:inline hover:scale-105"
            title="Settings Options"
          />
        </li>
      </ul>

      <Modal open={showPostModal} onClose={() => setShowPostModal(false)}>
        <>
          <PostModal setShowPostModal={setShowPostModal} />
        </>
      </Modal>

      <Modal
        open={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      >
        <>
          <SettingsModal setShowSettingsModal={setShowSettingsModal} />
        </>
      </Modal>
    </aside>
  );
};

export { SideBar };
