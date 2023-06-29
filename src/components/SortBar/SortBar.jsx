import { useRef, useState } from "react";
import { usePosts } from "../../index";
import { actionTypes } from "../../utils/constants";
import { FaArrowDown, FaArrowUp, FaFilter, FaFire } from "../../utils/icons";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

const SortBar = () => {
  const {
    postsState: { filterType },
    postsDispatch,
  } = usePosts();

  const [showSortModal, setShowSortModal] = useState(false);

  const modalRef = useRef();

  const { FILTER_POSTS } = actionTypes;

  useOnClickOutside(modalRef, setShowSortModal);

  return (
    <div className="w-full px-4 py-2 flex justify-between items-center border-b border-darkGrey dark:border-lightGrey">
      <div>{filterType} Posts</div>

      <div className="relative" ref={modalRef}>
        <button
          className="p-1 px-2 text-lg"
          onClick={() => setShowSortModal((prev) => !prev)}
        >
          <FaFilter title="Filters" className="hover:scale-110" />
        </button>

        {showSortModal && (
          <div className="absolute right-0 w-max text-sm flex flex-col gap-0.5 items-start py-1 px-1 shadow-lg border rounded border-darkGrey dark:border-lightGrey z-10 bg-lighterPrimary dark:bg-darkGrey dark:text-lightGrey">
            <button
              style={{
                backgroundColor:
                  filterType === "Trending" ? "#99f6e4" : "#d1fae5",
                fontWeight: filterType === "Trending" && "bold",
              }}
              className="flex justify-center py-1 px-3 rounded-md w-full dark:text-darkGrey"
              onClick={() => {
                postsDispatch({ type: FILTER_POSTS, payload: "Trending" });
                setShowSortModal((prev) => !prev);
              }}
            >
              <FaFire className="pr-2 text-xl " />
              Trending
            </button>
            <button
              style={{
                backgroundColor:
                  filterType === "Latest" ? "#99f6e4" : "#d1fae5",
                fontWeight: filterType === "Latest" && "bold",
              }}
              className="flex justify-center py-1 px-3 rounded-md w-full dark:text-darkGrey"
              onClick={() => {
                postsDispatch({ type: FILTER_POSTS, payload: "Latest" });
                setShowSortModal((prev) => !prev);
              }}
            >
              <FaArrowUp className="pr-2 text-xl" />
              Latest
            </button>
            <button
              style={{
                backgroundColor:
                  filterType === "Oldest" ? "#99f6e4" : "#d1fae5",
                fontWeight: filterType === "Oldest" && "bold",
              }}
              className="flex justify-center py-1 px-3 rounded-md w-full dark:text-darkGrey"
              onClick={() => {
                postsDispatch({ type: FILTER_POSTS, payload: "Oldest" });
                setShowSortModal((prev) => !prev);
              }}
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
