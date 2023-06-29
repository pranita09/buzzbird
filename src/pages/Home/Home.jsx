import React, { useEffect, useRef } from "react";
import {
  Loader,
  NewPost,
  PostCard,
  SearchBar,
  SideBar,
  SortBar,
  SuggestedUsers,
} from "../../components";
import { useAuth, usePosts } from "../../index";
import { actionTypes } from "../../utils/constants";
import { sortPosts } from "../../utils/sortPosts";

const Home = () => {
  const { currentUser } = useAuth();
  const {
    postsState: { posts, filterType, page, isNextPostLoading },
    isLoading,
    postsDispatch,
  } = usePosts();

  const elementRef = useRef(null);

  const { SET_PAGE, SET_IS_NEXT_POST_LOADING } = actionTypes;

  const postsOfFollowingUsers = posts?.filter(
    (post) =>
      currentUser?.following.some(
        (followingUser) => followingUser.username === post.username
      ) || currentUser.username === post.username
  );

  const sortedPosts = sortPosts(postsOfFollowingUsers, filterType).slice(
    0,
    page * 5
  );

  useEffect(() => {
    if (sortedPosts.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          postsDispatch({ type: SET_IS_NEXT_POST_LOADING, payload: true });
          postsDispatch({ type: SET_PAGE, payload: page + 1 });
        }
      });
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    }
  }, [
    page,
    sortedPosts.length,
    SET_IS_NEXT_POST_LOADING,
    SET_PAGE,
    postsDispatch,
  ]);

  document.title = "BuzzBird";

  useEffect(() => {
    let timeoutId;
    if (isNextPostLoading) {
      timeoutId = setTimeout(() => {
        postsDispatch({ type: SET_IS_NEXT_POST_LOADING, payload: false });
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isNextPostLoading, sortedPosts, SET_IS_NEXT_POST_LOADING, postsDispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    postsDispatch({ type: SET_PAGE, payload: 1 });
  }, [postsDispatch, SET_PAGE]);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkColor dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
        <h1 className=" p-4 sticky top-0 backdrop-blur-md z-10 border-b border-darkGrey dark:border-lightGrey flex items-center justify-between gap-4">
          <span className="text-xl font-bold">Home</span>
          <div className="block xl:hidden">
            <SearchBar />
          </div>
        </h1>

        <div>
          <NewPost />
          <SortBar />
          <div>
            {isLoading ? (
              <Loader />
            ) : sortedPosts?.length > 0 ? (
              <>
                {sortedPosts?.map((post, index) => {
                  return (
                    <React.Fragment key={post._id}>
                      <PostCard post={post} />
                      {index === sortedPosts?.length - 1 && (
                        <div ref={elementRef} />
                      )}
                    </React.Fragment>
                  );
                })}
                {!sortedPosts?.length === postsOfFollowingUsers?.length &&
                  isNextPostLoading && (
                    <div className="text-center text-sm mt-2">
                      Load more posts
                    </div>
                  )}
              </>
            ) : (
              <div className="p-4 text-center text-lg font-bold">
                No posts yet.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
    </div>
  );
};

export { Home };
