import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PostModal } from "..";
import { useAuth, usePosts, useUsers } from "../../index";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  RiUserUnfollowFill,
} from "../../utils/icons";

const PostOptionsModal = ({ post, setShowOptions, fromBookmarks }) => {
  const { _id, username } = post;

  const { currentUser } = useAuth();
  const {
    usersState: { users },
    unfollowUserHandler,
    followUserHandler,
    handleBtnsClick,
  } = useUsers();
  const { deletePostHandler } = usePosts();

  const [showPostModal, setShowPostModal] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userToFollow = users.find((user) => user.username === username);

  const userAlreadyFollowing = userToFollow.followers.find(
    (user) => user.username === currentUser.username
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, users]);

  return (
    <div className="absolute flex flex-col right-1 top-7 w-max rounded-md shadow-lg border border-darkGrey bg-lighterPrimary dark:bg-darkGrey">
      {username === currentUser.username ? (
        <>
          <button
            className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary dark:hover:bg-darkPrimary flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setShowPostModal(true);
            }}
          >
            <FaEdit className="mr-2" />
            Edit
          </button>
          {!fromBookmarks && (
            <button
              className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary dark:hover:bg-darkPrimary text-red flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                deletePostHandler(_id);
                if (pathname !== "/") {
                  setTimeout(() => {
                    navigate("/");
                    window.scroll({ top: 0, behavior: "smooth" });
                  }, 2000);
                }
                setShowOptions((prev) => !prev);
              }}
            >
              <FaTrash className="mr-2 " />
              Delete
            </button>
          )}
        </>
      ) : (
        <button
          className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary dark:hover:bg-darkPrimary flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            userAlreadyFollowing
              ? handleBtnsClick(400, unfollowUserHandler, userToFollow?._id)
              : handleBtnsClick(400, followUserHandler, userToFollow?._id);
            setShowOptions(false);
          }}
        >
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

      <Modal open={showPostModal} onClose={() => setShowPostModal(false)}>
        <>
          <PostModal
            post={post}
            setShowOptions={setShowOptions}
            setShowPostModal={setShowPostModal}
          />
        </>
      </Modal>
    </div>
  );
};

export { PostOptionsModal };
