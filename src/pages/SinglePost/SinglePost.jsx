import { Modal } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CommentCard,
  Loader,
  PostOptionsModal,
  PrimaryButton,
  SearchBar,
  SideBar,
  SuggestedUsers,
  UserAvatar,
  UsersModal,
} from "../../components";
import { useAuth, usePosts, useUsers } from "../../index";
import { getPostDate } from "../../utils/getPostDate";
import {
  FaArrowLeft,
  FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegComments,
  FaRegHeart,
  HiDotsHorizontal,
  MdShare,
} from "../../utils/icons";
import { sharePost } from "../../utils/sharePost";

const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const newCommentRef = useRef();

  const { currentUser } = useAuth();
  const {
    postsState: { post: currentPost },
    getSinglePost,
    likePostHandler,
    dislikePostHandler,
    likedByLoggedUser,
    addCommentHandler,
  } = usePosts();
  const {
    usersState: { users },
    addBookmarkHandler,
    removeBookmarkHandler,
    postAlreadyInBookmarks,
    handleBtnsClick,
  } = useUsers();

  const [commentData, setCommentData] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [likesModal, setLikesModal] = useState({
    show: false,
    title: "",
    list: [],
  });

  document.title = "Post | BuzzBird";

  const userWhoPosted = users?.find(
    (user) => user.username === currentPost?.username
  );

  const commentSubmitHandler = (e) => {
    e.preventDefault();
    addCommentHandler(currentPost?._id, { commentData });
    setCommentData("");
  };

  useEffect(() => {
    getSinglePost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, currentPost]);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkColor dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
        <h1 className=" p-3 sticky top-0 backdrop-blur-md z-20 border-b border-darkGrey dark:border-lightGrey flex items-center">
          <FaArrowLeft
            className="mr-5 mx-1 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span>
            <p>Post</p>
          </span>
        </h1>

        <div>
          {currentPost?.username ? (
            <div className="flex flex-col gap-2 text-sm border-b border-darkGrey px-4 py-3 break-words">
              <div className="grid grid-cols-[2.25rem_1fr] gap-2">
                <div
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/profile/${currentPost?.username}`);
                  }}
                >
                  <UserAvatar user={userWhoPosted} className="h-9 w-9" />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div
                      className="flex gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/profile/${currentPost?.username}`);
                      }}
                    >
                      <div className="flex flex-col cursor-pointer">
                        <span className="font-bold tracking-wide">
                          {userWhoPosted?.firstName +
                            " " +
                            userWhoPosted?.lastName}
                        </span>
                        <span className="text-[grey] -mt-1">
                          @{userWhoPosted?.username}
                        </span>
                      </div>
                      <span className="text-[grey]">.</span>
                      <div className="text-[grey]">
                        {getPostDate(currentPost?.createdAt)}
                      </div>
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
                        <PostOptionsModal
                          post={currentPost}
                          setShowOptions={setShowOptions}
                        />
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
                      <video
                        controls
                        autoplay
                        loop
                        muted
                        className="w-full h-auto rounded-md"
                      >
                        <source src={currentPost?.mediaURL} type="video/mp4" />
                      </video>
                    ))}
                </div>
              </div>

              {currentPost?.likes?.likeCount > 0 && (
                <button
                  className="border-t border-darkGrey text-left pt-2 mt-2 cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLikesModal(() => ({
                      show: true,
                      title: "Liked By",
                      list: currentPost?.likes?.likedBy,
                    }));
                  }}
                >
                  <span className="font-bold">
                    {currentPost?.likes?.likeCount}
                  </span>{" "}
                  <span className="text-[grey]">Likes</span>
                </button>
              )}

              <div className="flex justify-evenly gap-6 mt-1 -mb-1 border-t border-darkGrey">
                <div className="flex justify-center p-2 mr-4">
                  <button
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      likedByLoggedUser(currentPost, currentUser)
                        ? handleBtnsClick(
                            400,
                            dislikePostHandler,
                            currentPost?._id
                          )
                        : handleBtnsClick(
                            400,
                            likePostHandler,
                            currentPost?._id
                          );
                    }}
                  >
                    {likedByLoggedUser(currentPost, currentUser) ? (
                      <FaHeart className="text-lg text-red hover:scale-125" />
                    ) : (
                      <FaRegHeart className="text-lg hover:scale-125" />
                    )}
                  </button>
                  {currentPost?.likes?.likeCount > 0 && (
                    <span className="ml-2">
                      {currentPost?.likes?.likeCount}
                    </span>
                  )}
                </div>

                <div className="flex justify-center p-2 mr-4">
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      newCommentRef.current && newCommentRef.current.focus()
                    }
                  >
                    <FaRegComments className="text-lg hover:scale-125" />
                  </button>
                  {currentPost?.comments?.length > 0 && (
                    <span className="ml-2">
                      {currentPost?.comments?.length}
                    </span>
                  )}
                </div>

                <button
                  className="cursor-pointer p-2 mr-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    postAlreadyInBookmarks(currentPost?._id)
                      ? handleBtnsClick(
                          400,
                          removeBookmarkHandler,
                          currentPost?._id
                        )
                      : handleBtnsClick(
                          400,
                          addBookmarkHandler,
                          currentPost?._id
                        );
                  }}
                >
                  {postAlreadyInBookmarks(currentPost?._id) ? (
                    <FaBookmark className="text-lg hover:scale-125" />
                  ) : (
                    <FaRegBookmark className="text-lg hover:scale-125" />
                  )}
                </button>

                <button
                  className="cursor-pointer p-2 mr-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    sharePost(currentPost?._id);
                  }}
                >
                  <MdShare className="text-lg hover:scale-125" />
                </button>
              </div>

              <div className="grid grid-cols-[2.25rem_1fr] gap-2 pt-3 border-t border-darkGrey">
                <UserAvatar user={currentUser} className="h-9 w-9" />

                <form
                  className="flex justify-between"
                  onSubmit={commentSubmitHandler}
                >
                  <input
                    type="text"
                    ref={newCommentRef}
                    placeholder="Post your reply"
                    className="outline-none bg-inherit w-full dark:bg-darkColor"
                    value={commentData}
                    onChange={(e) => setCommentData(e.target.value)}
                  />
                  <PrimaryButton
                    type="submit"
                    className="rounded-md px-3 ml-4 disabled:opacity-80 disabled:cursor-not-allowed"
                    disabled={!commentData.trim()}
                  >
                    Reply
                  </PrimaryButton>
                </form>
              </div>

              {currentPost?.comments?.length > 0 &&
                currentPost?.comments
                  .reverse()
                  ?.map((comment) => (
                    <CommentCard
                      key={comment?._id}
                      comment={comment}
                      postId={currentPost?._id}
                    />
                  ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>

      {likesModal.show && (
        <Modal
          open={likesModal.show}
          onClose={() =>
            setLikesModal(() => ({ show: false, title: "", list: [] }))
          }
        >
          <>
            <UsersModal
              usersListModal={likesModal}
              setUsersListModal={setLikesModal}
            />
          </>
        </Modal>
      )}

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
    </div>
  );
};

export { SinglePost };
