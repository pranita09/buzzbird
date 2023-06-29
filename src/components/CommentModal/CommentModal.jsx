import { useRef, useState } from "react";
import { PrimaryButton, SecondaryButton, UserAvatar } from "..";
import { useAuth, usePosts } from "../../index";
import { styles } from "../../utils/constants";

const CommentModal = ({
  comment,
  postId,
  setShowCommentModal,
  setShowOptions,
}) => {
  const { currentUser } = useAuth();
  const { addCommentHandler, editCommentHandler } = usePosts();

  const [commentData, setCommentData] = useState(comment?.commentData || "");
  const newCommentRef = useRef();

  const submitCommentHandler = (e) => {
    e.preventDefault();
    if (comment) {
      editCommentHandler(postId, comment?._id, { commentData });
    } else {
      addCommentHandler(postId, { commentData });
    }
    setCommentData("");
    setShowCommentModal(false);
    comment && setShowOptions(false);
  };

  return (
    <div
      style={styles}
      className="grid grid-cols-[2.5rem_1fr] gap-2 items-start bg-lighterPrimary text-sm border-darkGrey px-4 py-3 cursor-text w-[90%] sm:w-[60%] xl:w-[45%] shadow-dark shadow-lg rounded-md border dark:bg-darkGrey"
    >
      <UserAvatar user={currentUser} className="h-10 w-10" />
      <form className="flex flex-col gap-4" onSubmit={submitCommentHandler}>
        <div className="w-full break-all outline-none mt-1.5 bg-lighterPrimary dark:bg-darkGrey">
          <textarea
            ref={newCommentRef}
            value={commentData}
            className="w-full break-all outline-none bg-lighterPrimary dark:bg-darkGrey resize-none h-[3rem] dark:text-lightGrey"
            placeholder="Post your reply"
            onChange={(e) => setCommentData(e.target.value)}
          />
        </div>

        <div className="flex gap-3 ml-auto">
          <PrimaryButton
            type="submit"
            className="py-1.5 px-5 rounded-md disabled:opacity-80 border-lightPrimary"
            disabled={!commentData?.trim()}
          >
            {comment ? "Save" : "Reply"}
          </PrimaryButton>
          <SecondaryButton
            type="reset"
            className="py-1 px-4 rounded-md border-none"
            onClick={() => {
              setShowCommentModal((prev) => !prev);
              comment && setShowOptions((prev) => !prev);
            }}
          >
            Cancel
          </SecondaryButton>
        </div>
      </form>
    </div>
  );
};

export { CommentModal };
