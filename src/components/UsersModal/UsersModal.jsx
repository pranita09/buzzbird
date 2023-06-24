import { useNavigate } from "react-router-dom";
import { FaTimes } from "../../utils/icons";
import { UserAvatar } from "../UserAvatar/UserAvatar";

const UsersModal = ({ usersListModal, setUsersListModal }) => {
  const { title, list } = usersListModal;

  const navigate = useNavigate();

  return (
    <div className="bg-lighterPrimary text-sm border border-darkGrey p-4 w-80 rounded overflow-y-auto mx-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">{title}</div>
        <button className="hover:bg-darkGrey h-min hover:rounded-full px-2 py-0.5">
          <FaTimes />
        </button>
      </div>

      <div className="flex flex-col justify-center gap-4">
        {list?.length ? (
          list?.map((user) => (
            <div
              key={user?._id}
              className="flex gap-2 cursor-pointer"
              onClick={() => navigate(`/profile/${user?.username}`)}
            >
              <UserAvatar user={user} className="h-9 w-9" />
              <div className="flex flex-col -mt-0.5">
                <span>{user?.firstName + " " + user?.lastName}</span>
                <span className="text-sm text-[grey] -mt-1">
                  @{user?.username}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Oops, No {title} found.</div>
        )}
      </div>
    </div>
  );
};

export { UsersModal };
