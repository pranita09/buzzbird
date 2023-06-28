import { useRef, useState } from "react";
import { useUsers } from "../../contexts/user-context";
import { UserAvatar, PostOptionsModal } from "..";
import {
  HiDotsHorizontal,
  FaRegHeart,
  FaHeart,
  FaRegComments,
  FaRegBookmark,
  FaBookmark,
  MdShare,
} from "../../utils/icons";
import { usePosts } from "../../contexts/post-context";
import { useAuth } from "../../contexts/auth-context";
// import { debounce } from "../../utils/debounce";
import { getPostDate } from "../../utils/getPostDate";
import { useNavigate } from "react-router-dom";
import { sharePost } from "../../utils/sharePost";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const {
    usersState: { users },
    addBookmarkHandler,
    removeBookmarkHandler,
    postAlreadyInBookmarks,
  } = useUsers();

  const { likePostHandler, dislikePostHandler, likedByLoggedUser } = usePosts();

  const [showOptions, setShowOptions] = useState(false);

  const postModalRef = useRef();

  const userWhoPosted = users?.find((user) => user.username === post?.username);

  return (
    <div
      className="grid grid-cols-[2.25rem_1fr] gap-2 text-sm border-b border-darkGrey dark:border-lightGrey px-3 py-3 cursor-pointer"
      ref={postModalRef}
      onClick={() => navigate(`/post/${post?._id}`)}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${userWhoPosted?.username}`);
        }}
      >
        <UserAvatar user={userWhoPosted} className="h-9 w-9" />
      </div>

      <div className="flex flex-col gap-2 break-words">
        <div className="flex justify-between">
          <div className="flex items-start 2xl:items-center gap-1.5">
            <div
              className="flex flex-col gap-0 2xl:flex-row 2xl:gap-1"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/profile/${userWhoPosted?.username}`);
              }}
            >
              <span className="font-bold tracking-wide">
                {userWhoPosted?.firstName + " " + userWhoPosted?.lastName}
              </span>
              <span className="text-[grey]">@{userWhoPosted?.username}</span>
            </div>
            <span className="text-[grey]">.</span>
            <div className="text-[grey]">{getPostDate(post?.createdAt)}</div>
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
              <PostOptionsModal post={post} setShowOptions={setShowOptions} />
            )}
          </div>
        </div>

        <div>{post?.content}</div>

        {post?.mediaURL &&
          (post?.mediaURL.split("/")[4] === "image" ? (
            <img
              src={post?.mediaURL}
              alt={post?.mediaAlt}
              className="w-full h-auto rounded-md"
            />
          ) : (
            <video controls className="w-full h-auto rounded-md">
              <source src={post?.mediaURL} type="video/mp4" />
            </video>
          ))}

        <div className="flex gap-6 -ml-2 mt-1">
          <div className="flex justify-center p-2 mr-4">
            <button
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                likedByLoggedUser(post, currentUser)
                  ? dislikePostHandler(post?._id)
                  : likePostHandler(post?._id);
              }}
            >
              {likedByLoggedUser(post, currentUser) ? (
                <FaHeart className="text-lg text-red hover:scale-125" />
              ) : (
                <FaRegHeart className="text-lg hover:scale-125" />
              )}
            </button>
            {post?.likes?.likeCount > 0 && (
              <span className="ml-1">{post?.likes?.likeCount}</span>
            )}
          </div>

          <div className="flex justify-center p-2 mr-4">
            <button className="cursor-pointer">
              <FaRegComments className="text-lg hover:scale-125" />
            </button>
            {post?.comments.length > 0 && (
              <span className="ml-1">{post?.comments.length}</span>
            )}
          </div>

          <button
            className="cursor-pointer p-2 mr-4"
            onClick={(e) => {
              e.stopPropagation();
              postAlreadyInBookmarks(post?._id)
                ? removeBookmarkHandler(post?._id)
                : addBookmarkHandler(post?._id);
            }}
          >
            {postAlreadyInBookmarks(post?._id) ? (
              <FaBookmark className="text-lg hover:scale-125" />
            ) : (
              <FaRegBookmark className="text-lg hover:scale-125" />
            )}
          </button>

          <button
            className="cursor-pointer p-2 mr-4"
            onClick={(e) => {
              e.stopPropagation();
              sharePost(post?._id);
            }}
          >
            <MdShare className="text-lg hover:scale-125" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
