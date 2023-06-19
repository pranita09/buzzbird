import { useUsers } from "../../contexts/user-context";
import { UserAvatar } from "..";

const SearchedUsersModal = () => {
  const { searchedUsers } = useUsers();
  return (
    <div className="flex flex-col gap-4 text-sm xl:text-base w-full p-4 z-40 bg-lighterPrimary rounded-md border border-darkGrey sticky top-0 mt-2">
      {searchedUsers.length ? (
        searchedUsers?.map((user) => (
          <div key={user._id} className="flex flex-start gap-2 cursor-pointer">
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
