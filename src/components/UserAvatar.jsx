const user = {
  _id: "LCrc9f0Zl0",
  firstName: "Aditya",
  lastName: "Joshi",
  password: "aditya123",
  username: "adityaj",
  bio: "Composing musical journeys",
  website: "https://adityajoshi.com",
  profileAvatar:
    "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
  backgroundImage:
    "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686342526/socialMedia/musician-bg_qgesca.jpg",

  following: [],
  followers: [],
  bookmarks: [],
};

const UserAvatar = (props) => {
  const { className } = props;

  const classesForImg = className + " rounded-full object-cover";
  const classesForInitials =
    className +
    " text-sm flex justify-center items-center rounded-full bg-primary text-lightGrey";

  const avatar = user?.profileAvatar;
  const userInitials = user?.firstName[0] + user.lastName[0];

  return (
    <span className="user-avatar cursor-pointer select-none">
      {avatar ? (
        <img src={avatar} alt={user?.firstName} className={classesForImg} />
      ) : (
        <span className={classesForInitials}>{userInitials}</span>
      )}
    </span>
  );
};

export { UserAvatar };
