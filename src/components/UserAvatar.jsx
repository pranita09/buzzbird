const UserAvatar = (props) => {
  const { className, user } = props;

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
