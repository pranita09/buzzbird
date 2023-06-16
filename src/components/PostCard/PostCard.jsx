import { useState } from "react";
import { useUsers } from "../../contexts/user-context";
import { UserAvatar, PostOptionsModal } from "..";
import {
  HiDotsHorizontal,
  FaRegHeart,
  FaHeart,
  FaRegComments,
  FaRegBookmark,
  MdShare,
} from "../../utils/icons";
import { usePosts } from "../../contexts/post-context";
import { useAuth } from "../../contexts/auth-context";
import { debounce } from "../../utils/debounce";

const PostCard = ({ post }) => {
  const { currentUser } = useAuth();

  const {
    usersState: { users },
  } = useUsers();

  const {
    postsState: { posts },
    likePostHandler,
    dislikePostHandler,
    likedByLoggedUser,
  } = usePosts();

  const [showOptions, setShowOptions] = useState(false);

  const currentPost = posts?.find((item) => item.username === post.username);

  const userWhoPosted = users?.find(
    (user) => user.username === currentPost?.username
  );

  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 text-sm border-b border-darkGrey dark:border-lightGrey px-4 py-3 cursor-pointer">
      <div>
        <UserAvatar user={userWhoPosted} className="h-9 w-9" />
      </div>

      <div className="flex flex-col gap-2 break-all">
        <div className="flex justify-between">
          <div className="flex items-start 2xl:items-center gap-1.5">
            <div className="flex flex-col gap-0 2xl:flex-row 2xl:gap-1">
              <span className="font-bold tracking-wide">
                {userWhoPosted?.firstName + " " + userWhoPosted?.lastName}
              </span>
              <span className="text-[grey]">@{userWhoPosted?.username}</span>
            </div>
            <span className="text-[grey]">.</span>
            <div className="text-[grey]">02 June 2023</div>
          </div>

          <div className="relative">
            <HiDotsHorizontal
              className="cursor-pointer text-lg m-2"
              onClick={() => setShowOptions((prev) => !prev)}
            />
            {showOptions && (
              <PostOptionsModal post={post} setShowOptions={setShowOptions} />
            )}
          </div>
        </div>

        <div>{currentPost?.content}</div>

        {currentPost?.mediaURL &&
          (currentPost?.mediaURL.split("/")[4] === "image" ? (
            <img
              src={currentPost?.mediaURL}
              alt={currentPost?.mediaAlt}
              className="w-full h-auto rounded-md"
            />
          ) : (
            <video controls className="w-full h-auto rounded-md">
              <source src={currentPost?.mediaURL} type="video/mp4" />
            </video>
          ))}

        <div className="flex gap-6 -ml-2 mt-1">
          <div className="flex justify-center p-2 pr-4">
            <button
              className="cursor-pointer"
              onClick={(event) => {
                event.stopPropagation();
                likedByLoggedUser(currentPost, currentUser)
                  ? dislikePostHandler(currentPost?._id)
                  : likePostHandler(currentPost?._id);
              }}
            >
              {likedByLoggedUser(currentPost, currentUser) ? (
                <FaHeart className="text-lg text-red" />
              ) : (
                <FaRegHeart className="text-lg" />
              )}
            </button>
            {currentPost?.likes?.likeCount > 0 && (
              <span className="ml-1">{currentPost?.likes?.likeCount}</span>
            )}
          </div>

          <div className="flex justify-center p-2 pr-4">
            <button className="cursor-pointer">
              <FaRegComments className="text-lg" />
            </button>
            {currentPost?.comments.length > 0 && (
              <span className="ml-1">{currentPost?.comments.length}</span>
            )}
          </div>

          <button className="cursor-pointer p-2 pr-4">
            <FaRegBookmark className="text-lg" />
          </button>

          <button className="cursor-pointer p-2 pr-4">
            <MdShare className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
