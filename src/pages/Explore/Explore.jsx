import { usePosts } from "../../contexts/post-context";
import {
  SideBar,
  SearchBar,
  PostCard,
  SuggestedUsers,
  Loader,
} from "../../components";
import { sortPosts } from "../../utils/sortPosts";
import { actionTypes } from "../../utils/constants";
import React, { useEffect, useRef } from "react";

const Explore = () => {
  const {
    postsState: { posts, page, isNextPostLoading },
    isLoading,
    postsDispatch,
  } = usePosts();

  const elementRef = useRef(null);

  const { SET_PAGE, SET_IS_NEXT_POST_LOADING } = actionTypes;

  const sortedPosts = sortPosts(posts, "Latest").slice(0, page * 5);

  const handleObserver = (entries) => {
    console.log("here");
    const entry = entries[0];
    console.log("INSIDE handleobserver", entry);
    if (entry.isIntersecting) {
      postsDispatch({ type: SET_IS_NEXT_POST_LOADING, payload: true });
      postsDispatch({ type: SET_PAGE, payload: page + 1 });
    }
  };

  console.log(page);
  console.log(elementRef.current);
  console.log(sortedPosts);

  useEffect(() => {
    if (sortedPosts.length > 0) {
      console.log("To check");
      const observer = new IntersectionObserver(handleObserver, {
        threshold: 1,
      });
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return () => {
        if (observer) {
          observer?.unobserve(elementRef);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNextPostLoading, sortedPosts]);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkGrey dark:text-lightGrey transition-all duration-500">
      <SideBar />

      <div className="sm:border-x border-darkGrey dark:border-lightGrey">
        <h1 className=" p-4 sticky top-0 backdrop-blur-md z-20 border-b border-darkGrey dark:border-lightGrey flex items-center justify-between">
          <span className="text-xl font-bold">Explore</span>
          <div className="block xl:hidden">
            <SearchBar />
          </div>
        </h1>

        <div>
          <div>
            {isLoading ? (
              <Loader />
            ) : sortedPosts?.length > 0 ? (
              <>
                {sortedPosts.map((post, index) => {
                  return (
                    <React.Fragment key={post._id}>
                      <PostCard post={post} />
                      {console.log(index === sortedPosts?.length - 1)}
                      {index === sortedPosts?.length - 1 && (
                        <div ref={elementRef} />
                      )}
                    </React.Fragment>
                  );
                })}
                {isNextPostLoading && <div>Loader more items</div>}
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

export { Explore };
