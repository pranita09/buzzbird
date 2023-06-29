import { useNavigate } from "react-router-dom";
import { UserAvatar } from "..";
import { styles } from "../../utils/constants";
import { FaTimes } from "../../utils/icons";

const UsersModal = ({ usersListModal, setUsersListModal }) => {
  const { title, list } = usersListModal;

  const navigate = useNavigate();

  return (
    <div
      style={styles}
      className="bg-lighterPrimary text-sm border border-darkGrey p-4 w-[17rem] rounded-md overflow-y-auto mx-4 dark:bg-darkGrey dark:text-lightGrey"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">{title}</div>
        <button
          className="hover:bg-darkGrey hover:text-lightGrey h-min w-min hover:rounded-full p-1 dark:hover:text-darkGrey dark:hover:bg-lightGrey"
          onClick={() => setUsersListModal(false)}
        >
          <FaTimes />
        </button>
      </div>

      <div className="flex flex-col justify-center gap-4">
        {list?.length ? (
          list?.map((user) => (
            <div
              key={user?._id}
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                navigate(`/profile/${user?.username}`);
                setUsersListModal({ show: false, title: "", list: [] });
              }}
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
