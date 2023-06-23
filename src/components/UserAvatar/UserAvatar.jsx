const UserAvatar = (props) => {
  const { className } = props;

  const classesForImg = className + " rounded-full object-cover";

  const avatar = props?.user?.profileAvatar;
  const dummyProfileImage =
    "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687527846/socialMedia/cat-5646889_1280_wgwzkh.jpg";

  return (
    <span className="user-avatar cursor-pointer select-none">
      {avatar ? (
        <img
          src={avatar}
          alt={props?.user?.firstName}
          className={classesForImg}
        />
      ) : (
        <img
          src={dummyProfileImage}
          alt="DummyProfile"
          className={classesForImg}
        />
      )}
    </span>
  );
};

export { UserAvatar };
