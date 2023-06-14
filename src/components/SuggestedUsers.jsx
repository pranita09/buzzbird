import { useAuth } from "../contexts/auth-context";
import { useUsers } from "../contexts/user-context";

const SuggestedUsers = () => {
  const { currentUser } = useAuth();
  const {
    usersState: { users },
  } = useUsers();

  const userData = users?.find(
    (user) => user.username === currentUser.username
  );

  const filteredUsers = users
    ?.filter((dbUser) => dbUser.username !== userData.username)
    ?.filter(
      (eachUser) =>
        !userData.following.find((item) => item.username === eachUser.username)
    );

  console.log(filteredUsers);
  return (
    <div>
      <h2>Suggested Users</h2>
    </div>
  );
};

export { SuggestedUsers };
