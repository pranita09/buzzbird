import { useNavigate } from "react-router-dom";
import { UserAvatar } from "..";
import { useUsers } from "../../index";
import { actionTypes } from "../../utils/constants";

const SearchedUsersModal = () => {
  const navigate = useNavigate();

  const { searchedUsers, usersDispatch } = useUsers();

  const { SEARCH_USER } = actionTypes;

  return (
    <div className="flex flex-col gap-4 text-sm xl:text-base w-full p-4 z-40 bg-lighterPrimary rounded-md border border-darkGrey sticky top-0 mt-2 dark:bg-darkGrey dark:text-lightGrey">
      {searchedUsers.length ? (
        searchedUsers?.map((user) => (
          <div
            key={user._id}
            className="flex flex-start gap-2 cursor-pointer"
            onClick={() => {
              navigate(`/profile/${user?.username}`);
              usersDispatch({ type: SEARCH_USER, payload: "" });
            }}
          >
            <UserAvatar user={user} className="h-8 w-8" />
            <div className="flex flex-col grow -mt-0.5">
              <span className="text-sm">
                {user.firstName + " " + user.lastName}
              </span>
              <span className="text-sm text-[grey] -mt-1">{user.username}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">Oops, no match found!</div>
      )}
    </div>
  );
};

export { SearchedUsersModal };
