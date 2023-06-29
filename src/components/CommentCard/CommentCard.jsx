import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommentOptionsModal, UserAvatar } from "..";
import { getPostDate } from "../../utils/getPostDate";
import { HiDotsHorizontal } from "../../utils/icons";

const CommentCard = ({ comment, postId }) => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="grid grid-cols-[2.25rem_1fr] gap-2 pt-3 border-t border-darkGrey ">
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${comment?.username}`);
        }}
      >
        <UserAvatar user={comment} className="w-9 h-9" />
      </div>

      <div className="flex flex-col gap-1 break-words">
        <div className="flex justify-between">
          <div
            className="flex items-start 2xl:items-center gap-1 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${comment?.username}`);
            }}
          >
            <div className="flex flex-col gap-0 2xl:flex-row 2xl:gap-1">
              <span className="font-bold tracking-wide">
                {comment?.firstName + " " + comment?.lastName}
              </span>
              <span className="text-[grey] text-sm">@{comment?.username}</span>
            </div>
            <span className="text-[grey]">.</span>
            <div className="text-[grey]">{getPostDate(comment?.createdAt)}</div>
          </div>

          <div className="relative">
            <HiDotsHorizontal
              className="cursor-pointer text-lg m-2 hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions((prev) => !prev);
              }}
            />
            {showOptions && (
              <CommentOptionsModal
                comment={comment}
                postId={postId}
                setShowOptions={setShowOptions}
              />
            )}
          </div>
        </div>
        <div>{comment?.commentData}</div>
      </div>
    </div>
  );
};

export { CommentCard };
