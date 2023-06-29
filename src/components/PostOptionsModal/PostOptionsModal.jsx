import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, usePosts, useUsers } from "../../index";
import { PostModal } from "..";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  RiUserUnfollowFill,
} from "../../utils/icons";
import { Modal } from "@mui/material";

const PostOptionsModal = ({ post, setShowOptions }) => {
  const { _id, username } = post;

  const { currentUser } = useAuth();
  const {
    usersState: { users },
    unfollowUserHandler,
    followUserHandler,
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
    <div className="absolute flex flex-col right-1 top-7 w-max rounded-md shadow-lg border border-darkGrey bg-lighterPrimary">
      {username === currentUser.username ? (
        <>
          <button
            className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary flex items-center justify-center"
            onClick={() => {
              setShowPostModal(true);
            }}
          >
            <FaEdit className="mr-2" />
            Edit
          </button>
          <button
            className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary text-red flex items-center justify-center"
            onClick={() => {
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
        </>
      ) : (
        <button
          className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary flex items-center justify-center"
          onClick={() => {
            userAlreadyFollowing
              ? unfollowUserHandler(userToFollow?._id)
              : followUserHandler(userToFollow?._id);
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
