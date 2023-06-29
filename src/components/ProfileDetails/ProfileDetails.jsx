import { Modal } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EditUserModal, SecondaryButton, UserAvatar, UsersModal } from "..";
import { useAuth, useUsers } from "../../index";
import { defaultBgImage } from "../../utils/constants";
import { getPostDate } from "../../utils/getPostDate";
import { HiLink, MdDateRange } from "../../utils/icons";

const ProfileDetails = ({ user }) => {
  const { currentUser, logoutHandler } = useAuth();
  const { followUserHandler, unfollowUserHandler, handleBtnsClick } =
    useUsers();

  const [editUserModal, setEditUserModal] = useState(false);
  const [usersListModal, setUsersListModal] = useState({
    show: false,
    title: "",
    list: [],
  });

  const userAlreadyFollowing = user?.followers?.find(
    (user) => user.username === currentUser.username
  );

  return (
    <div className="relative flex flex-col items-center w-full border-b border-darkGrey dark:border-lightGrey">
      <>
        <img
          src={user?.backgroundImage ? user?.backgroundImage : defaultBgImage}
          alt={
            user?.username ? user?.username + " bgImage" : "BuzzBird_Bg_Image"
          }
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
                  <SecondaryButton
                    className="py-1 px-3 rounded"
                    onClick={() => setEditUserModal(true)}
                  >
                    Edit Profile
                  </SecondaryButton>
                  <SecondaryButton
                    className="py-1 px-3 rounded hover:bg-red"
                    onClick={logoutHandler}
                  >
                    Logout
                  </SecondaryButton>
                </>
              ) : (
                <>
                  <SecondaryButton
                    className="py-1 px-3 rounded"
                    onClick={() =>
                      userAlreadyFollowing
                        ? handleBtnsClick(400, unfollowUserHandler, user?._id)
                        : handleBtnsClick(400, followUserHandler, user?._id)
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
          {user?.bio && <span>{user?.bio}</span>}
          {user?.website && (
            <div className="flex gap-2 items-center">
              <HiLink className="text-lg" />
              <Link to={user?.website} target="_blank">
                <span className="hover:underline cursor-pointer text-sm text-[blue] dark:text-[skyblue]">
                  {user?.website?.split("/")[2]}
                </span>
              </Link>
            </div>
          )}
          <div className="flex gap-2 items-center">
            <MdDateRange />
            <span className="text-sm">{getPostDate(user?.createdAt)}</span>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="hover:underline cursor-pointer"
              onClick={() =>
                setUsersListModal(() => ({
                  show: true,
                  title: "Following",
                  list: user?.following,
                }))
              }
            >
              <span className="font-bold">{user?.following?.length}</span>{" "}
              Following
            </span>
            <span
              className="hover:underline cursor-pointer"
              onClick={() =>
                setUsersListModal(() => ({
                  show: true,
                  title: "Followers",
                  list: user?.followers,
                }))
              }
            >
              <span className="font-bold">{user?.followers?.length}</span>{" "}
              Followers
            </span>
          </div>
        </div>
      </>

      {usersListModal.show && (
        <Modal
          open={usersListModal.show}
          onClose={() =>
            setUsersListModal(() => ({ show: false, title: "", list: [] }))
          }
        >
          <>
            <UsersModal
              usersListModal={usersListModal}
              setUsersListModal={setUsersListModal}
            />
          </>
        </Modal>
      )}

      {editUserModal && (
        <Modal open={editUserModal} onClose={() => setEditUserModal(false)}>
          <>
            <EditUserModal setEditUserModal={setEditUserModal} />
          </>
        </Modal>
      )}
    </div>
  );
};

export { ProfileDetails };
