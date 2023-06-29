import { Modal } from "@mui/material";
import { useState } from "react";
import { CommentModal } from "..";
import { useAuth, usePosts, useUsers } from "../../index";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  RiUserUnfollowFill,
} from "../../utils/icons";

const CommentOptionsModal = ({ comment, postId, setShowOptions }) => {
  const { currentUser } = useAuth();
  const {
    usersState: { users },
    unfollowUserHandler,
    followUserHandler,
    handleBtnsClick,
  } = useUsers();
  const { deleteCommentHandler } = usePosts();

  const [showCommentModal, setShowCommentModal] = useState(false);

  const userToFollow = users.find((user) => user.username === comment.username);

  const userAlreadyFollowing = userToFollow.followers.find(
    (user) => user.username === currentUser.username
  );

  return (
    <div className="absolute flex flex-col right-1 top-7 w-max rounded-md shadow-lg border border-darkGrey bg-lighterPrimary dark:bg-darkGrey">
      {comment?.username === currentUser?.username ? (
        <>
          <button
            className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary dark:hover:bg-darkPrimary flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setShowCommentModal(true);
            }}
          >
            <FaEdit className="mr-2" />
            Edit
          </button>
          <button
            className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary dark:hover:bg-darkPrimary text-red flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              deleteCommentHandler(postId, comment?._id);
              setShowOptions((prev) => !prev);
            }}
          >
            <FaTrash className="mr-2 " />
            Delete
          </button>
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

      <Modal open={showCommentModal} onClose={() => setShowCommentModal(false)}>
        <>
          <CommentModal
            comment={comment}
            postId={postId}
            setShowOptions={setShowOptions}
            setShowCommentModal={setShowCommentModal}
          />
        </>
      </Modal>
    </div>
  );
};

export { CommentOptionsModal };
