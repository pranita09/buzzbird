import { useNavigate } from "react-router-dom";
import { useAuth, useUsers } from "../../index";
import { Loader, PrimaryButton, UserAvatar } from "..";

const SuggestedUsers = () => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  const {
    usersState: { users },
    followUserHandler,
    isLoading,
  } = useUsers();

  const filteredUsers = users
    ?.filter((dbUser) => dbUser.username !== currentUser?.username)
    ?.filter(
      (eachUser) =>
        !currentUser?.following?.find(
          (item) => item.username === eachUser.username
        )
    );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredUsers.length ? (
            <div className="flex flex-col gap-4 m-4 mt-0 px-4 py-3 bg-lighterPrimary rounded-md max-h-[315px] overflow-hidden justify-start sticky top-[85px] dark:text-darkColor">
              <div className="text-lg font-bold tracking-wide">
                Who to Follow
              </div>

              {filteredUsers?.map((user) => (
                <div
                  key={user._id}
                  className="flex items-start gap-2 cursor-pointer"
                >
                  <UserAvatar user={user} className="h-9 w-9" />

                  <div
                    className="flex flex-col grow -mt-0.5"
                    onClick={() => navigate(`/profile/${user?.username}`)}
                  >
                    <span className="text-sm">
                      {user.firstName + " " + user.lastName}
                    </span>
                    <span className="text-sm text-[grey] -mt-1">
                      @{user.username}
                    </span>
                  </div>

                  <PrimaryButton
                    className="py-1 px-2 rounded-md"
                    onClick={() => followUserHandler(user?._id)}
                  >
                    Follow
                  </PrimaryButton>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export { SuggestedUsers };
