import { useState } from "react";
import { FaFilter, FaFire, FaArrowUp, FaArrowDown } from "../../utils/icons";
import { actionTypes } from "../../utils/constants";
import { usePosts } from "../../contexts/post-context";

const SortBar = () => {
  const {
    postsState: { filterType },
    postsDispatch,
  } = usePosts();
  const [showSortModal, setShowSortModal] = useState(false);
  const { FILTER_POSTS } = actionTypes;
  return (
    <div className="w-full px-4 py-2 flex justify-between items-center border-b border-darkGrey dark:border-lightGrey">
      <div>{filterType} Posts</div>

      <div className="relative">
        <button
          className="p-1 px-2 text-lg"
          onClick={() => setShowSortModal((prev) => !prev)}
        >
          <FaFilter />
        </button>

        {showSortModal && (
          <div className="absolute right-0 w-max text-sm flex flex-col gap-0.5 items-start py-1 px-1 shadow-lg border rounded border-darkGrey dark:border-lightGrey z-10 bg-lighterPrimary">
            <button
              style={{
                backgroundColor:
                  filterType === "Trending" ? "#99f6e4" : "#d1fae5",
              }}
              className="flex justify-center py-1 px-3 rounded-md w-full hover:bg-lightPrimary"
              onClick={() =>
                postsDispatch({ type: FILTER_POSTS, payload: "Trending" })
              }
            >
              <FaFire className="pr-2 text-xl " />
              Trending
            </button>
            <button
              style={{
                backgroundColor:
                  filterType === "Latest" ? "#99f6e4" : "#d1fae5",
              }}
              className="flex justify-center py-1 px-3 rounded-md w-full hover:bg-lightPrimary"
              onClick={() =>
                postsDispatch({ type: FILTER_POSTS, payload: "Latest" })
              }
            >
              <FaArrowUp className="pr-2 text-xl" />
              Latest
            </button>
            <button
              style={{
                backgroundColor:
                  filterType === "Oldest" ? "#99f6e4" : "#d1fae5",
              }}
              className="flex justify-center py-1 px-3 rounded-md w-full hover:bg-lightPrimary"
              onClick={() =>
                postsDispatch({ type: FILTER_POSTS, payload: "Oldest" })
              }
            >
              <FaArrowDown className="pr-2 text-xl" />
              Oldest
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { SortBar };
