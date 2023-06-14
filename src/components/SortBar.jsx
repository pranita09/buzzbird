import { useState } from "react";
import { FaFilter, FaFire, FaArrowUp, FaArrowDown } from "react-icons/fa";

const SortBar = () => {
  const [showSortModal, setShowSortModal] = useState(false);
  return (
    <div className="w-full px-4 py-2 flex justify-between items-center border-b border-darkGrey dark:border-lightGrey">
      <div>Posts</div>

      <div className="relative">
        <button
          className="p-1 px-2 text-lg"
          onClick={() => setShowSortModal((prev) => !prev)}
        >
          <FaFilter />
        </button>

        {showSortModal && (
          <div className="absolute right-0 w-max text-sm flex flex-col gap-0.5 items-start py-1 px-1 shadow-lg border rounded border-darkGrey dark:border-lightGrey z-10">
            <button className="flex justify-center py-1 px-3 rounded-md w-full">
              <FaFire className="pr-2 text-xl " />
              Trending
            </button>
            <button className="flex justify-center py-1 px-3 rounded-md w-full">
              <FaArrowUp className="pr-2 text-xl" />
              Latest
            </button>
            <button className="flex justify-center py-1 px-3 rounded-md w-full">
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
