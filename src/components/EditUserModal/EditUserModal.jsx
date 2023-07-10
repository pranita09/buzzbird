import { Modal } from "@mui/material";
import { useState } from "react";
import { PrimaryButton, UserAvatar } from "..";
import { useAuth, useUsers } from "../../index";
import { avatarImages, defaultBgImage, styles } from "../../utils/constants";
import { BsPersonCircle, FaCamera, FaTimes } from "../../utils/icons";

const EditUserModal = ({ setEditUserModal }) => {
  const { currentUser } = useAuth();
  const { editUserProfileHandler } = useUsers();

  const [editInput, setEditInput] = useState(currentUser);
  const [profileImage, setProfileImage] = useState(null);
  const [profileAvatarImage, setProfileAvatarImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  const editProfileFormHandler = async (e) => {
    e.preventDefault();
    editUserProfileHandler(editInput);
    setEditUserModal(false);
  };

  return (
    <div
      style={styles}
      className="mx-4 text-sm border border-darkGrey p-4 w-80 rounded overflow-y-auto bg-lighterPrimary dark:bg-darkGrey dark:text-lightGrey"
    >
      <form className="flex flex-col gap-2.5" onSubmit={editProfileFormHandler}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="hover:bg-darkGrey hover:text-lightGrey dark:hover:bg-lightGrey dark:hover:text-darkGrey h-min p-1 mr-3 rounded-full"
              type="button"
              onClick={() => setEditUserModal(false)}
            >
              <FaTimes />
            </button>
            <span className="text-lg font-semibold">Edit Profile</span>
          </div>
          <PrimaryButton type="submit" className="px-4 py-1 rounded-md">
            Save
          </PrimaryButton>
        </div>

        <label className="w-full">
          <div className="w-full relative ">
            <img
              src={
                coverImage
                  ? URL.createObjectURL(coverImage)
                  : editInput.backgroundImage
                  ? editInput.backgroundImage
                  : defaultBgImage
              }
              alt={coverImage ? "UpdatedCoverImage" : "CoverImage"}
              className="object-cover h-24 w-full rounded opacity-90 "
            />
            <div
              className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 p-2 rounded-full bg-lightGrey cursor-pointer"
              title="Change Cover Photo"
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setCoverImage(e.target.files[0]);
                  setEditInput({
                    ...editInput,
                    backgroundImage: URL.createObjectURL(e.target.files[0]),
                  });
                }}
              />
              <FaCamera className="text-md text-darkGrey" />
            </div>
          </div>
        </label>

        <div className="flex wrap mx-6">
          <label className="w-max cursor-pointer mx-auto">
            <div className="relative">
              <UserAvatar
                className="w-[4.5rem] h-[4.5rem] opacity-90"
                user={
                  profileImage
                    ? {
                        ...currentUser,
                        profileAvatar: URL.createObjectURL(profileImage),
                      }
                    : profileAvatarImage
                    ? { ...currentUser, profileAvatar: profileAvatarImage }
                    : currentUser
                }
              />
              <div
                className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 p-1 rounded-full bg-lightGrey cursor-pointer"
                title="Change Profile Picture"
              >
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    setProfileImage(e.target.files[0]);
                    setEditInput({
                      ...editInput,
                      profileAvatar: URL.createObjectURL(e.target.files[0]),
                    });
                  }}
                />
                <FaCamera className="text-darkGrey text-sm" />
              </div>
            </div>
          </label>

          <label className="w-max cursor-pointer mx-auto">
            <div className="relative">
              <UserAvatar
                className="w-[4.5rem] h-[4.5rem] opacity-90"
                user={
                  profileImage
                    ? {
                        ...currentUser,
                        profileAvatar: URL.createObjectURL(profileImage),
                      }
                    : profileAvatarImage
                    ? { ...currentUser, profileAvatar: profileAvatarImage }
                    : currentUser
                }
              />
              <div
                className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 p-1 rounded-full bg-lightGrey cursor-pointer"
                title="Add Avatar"
                onClick={() => setShowAvatarOptions(true)}
              >
                <BsPersonCircle className="text-darkGrey text-sm" />
              </div>
            </div>
          </label>
        </div>

        <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs">First Name</div>
            <input
              className="bg-lighterPrimary dark:bg-darkGrey w-full text-sm outline-none border-none"
              type="text"
              name="firstName"
              value={editInput.firstName}
              onChange={(e) =>
                setEditInput({ ...editInput, firstName: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs">Last Name</div>
            <input
              className="bg-lighterPrimary dark:bg-darkGrey w-full text-sm outline-none border-none"
              type="text"
              name="lastName"
              value={editInput.lastName}
              onChange={(e) =>
                setEditInput({ ...editInput, lastName: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs">Bio</div>
            <input
              className="bg-lighterPrimary dark:bg-darkGrey w-full text-sm outline-none border-none"
              type="text"
              name="bio"
              value={editInput.bio}
              onChange={(e) =>
                setEditInput({ ...editInput, bio: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs">Website</div>
            <input
              className="bg-lighterPrimary dark:bg-darkGrey w-full text-sm outline-none border-none"
              type="url"
              name="website"
              value={editInput.website}
              onChange={(e) =>
                setEditInput({ ...editInput, website: e.target.value })
              }
            />
          </label>
        </div>
      </form>

      <Modal
        open={showAvatarOptions}
        onClose={() => setShowAvatarOptions(false)}
      >
        <div
          style={styles}
          className="mx-4 text-sm border border-darkGrey p-4 w-60 rounded-md overflow-y-auto bg-lighterPrimary dark:bg-darkGrey dark:text-lightGrey flex flex-col gap-4"
        >
          <div className="flex items-center">
            <button
              className="hover:bg-darkGrey hover:text-lightGrey dark:hover:bg-lightGrey dark:hover:text-darkGrey text-sm h-min p-0.5 mr-3 rounded-full"
              type="button"
              onClick={() => setShowAvatarOptions(false)}
            >
              <FaTimes className="text-sm" />
            </button>
            <span className="font-semibold">Choose Your Avatar</span>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {avatarImages.map((avatar, index) => (
              <span
                key={index}
                className="user-avatar cursor-pointer"
                onClick={() => {
                  setProfileAvatarImage(avatar);
                  setEditInput({
                    ...editInput,
                    profileAvatar: avatar,
                  });
                  setShowAvatarOptions(false);
                }}
              >
                <img
                  src={avatar}
                  alt={`Avatar${index}`}
                  className="rounded-full object-cover h-14 w-14 hover:opacity-80"
                />
              </span>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { EditUserModal };
