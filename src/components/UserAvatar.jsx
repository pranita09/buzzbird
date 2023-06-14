const UserAvatar = (props) => {
  const { className } = props;

  const classesForImg = className + " rounded-full object-cover";
  const classesForInitials =
    className +
    " text-sm flex justify-center items-center rounded-full bg-primary text-lightGrey";

  const avatar = props?.user?.profileAvatar;
  const userInitials = props?.user?.firstName[0] + props?.user?.lastName[0];

  return (
    <span className="user-avatar cursor-pointer select-none">
      {avatar ? (
        <img
          src={avatar}
          alt={props?.user?.firstName}
          className={classesForImg}
        />
      ) : (
        <span className={classesForInitials}>{userInitials}</span>
      )}
    </span>
  );
};

export { UserAvatar };
