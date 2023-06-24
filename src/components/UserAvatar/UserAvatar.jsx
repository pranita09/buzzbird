import { dummyProfileImage } from "../../utils/constants";

const UserAvatar = (props) => {
  const { className } = props;

  const classesForImg = className + " rounded-full object-cover";

  const avatar = props?.user?.profileAvatar;

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
