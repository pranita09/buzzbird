import { useAuth } from "../contexts/auth-context";
import { useUsers } from "../contexts/user-context";
import { UserAvatar } from "./UserAvatar";
import { PrimaryButton } from "./Buttons";

const SuggestedUsers = () => {
  const { currentUser } = useAuth();
  const {
    usersState: { users },
  } = useUsers();

  const userData = users?.find(
    (user) => user.username === currentUser.username
  );

  const filteredUsers = users
    ?.filter((dbUser) => dbUser.username !== userData?.username)
    ?.filter(
      (eachUser) =>
        !userData.following.find((item) => item.username === eachUser.username)
    );

  console.log(filteredUsers);
  return (
    <>
      {filteredUsers.length ? (
        <div className="flex flex-col justify-center gap-4 m-4 mt-0 px-4 py-3 bg-lighterPrimary rounded-md h-max w-full sticky top-[85px] z-0 dark:text-darkColor">
          <div className="text-lg font-bold tracking-wide">Who to Follow</div>
          {filteredUsers?.map((user) => (
            <div
              key={user._id}
              className="flex items-start gap-2 cursor-pointer"
            >
              <UserAvatar user={user} className="h-9 w-9" />
              <div className="flex flex-col grow -mt-0.5">
                <span className="text-sm">
                  {user.firstName + " " + user.lastName}
                </span>
                <span className="text-sm text-[grey] -mt-1">
                  @{user.username}
                </span>
              </div>
              <PrimaryButton className="py-1 px-2 rounded-md">
                Follow
              </PrimaryButton>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export { SuggestedUsers };
