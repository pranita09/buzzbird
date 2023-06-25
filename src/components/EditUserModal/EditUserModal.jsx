import { useState } from "react";
import { avatarImages, defaultBgImage } from "../../utils/constants";
import { FaTimes, FaCamera, BsPersonCircle } from "../../utils/icons";
import { PrimaryButton } from "../Buttons/Buttons";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { Modal } from "@mui/material";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditUserModal = ({ setEditUserModal }) => {
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  return (
    <div
      style={styles}
      className="mx-4 text-sm border border-darkGrey p-4 w-80 rounded overflow-y-auto bg-lighterPrimary"
    >
      <form className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="hover:bg-darkGrey hover:text-lightGrey h-min p-1 mr-3 rounded-full"
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
              src={defaultBgImage}
              alt="Dummy"
              className="object-cover h-24 w-full rounded opacity-80 "
            />
            <div
              className="absolute top-1/3 left-[45%] p-2 rounded-full bg-lightGrey cursor-pointer"
              title="Change Cover Photo"
            >
              <input type="file" accept="image/*" className="hidden" />
              <FaCamera className="text-md text-darkGrey" />
            </div>
          </div>
        </label>

        <div className="flex wrap mx-6">
          <label className="w-max cursor-pointer mx-auto">
            <div className="relative">
              <UserAvatar className="w-[4.5rem] h-[4.5rem] opacity-80" />
              <div
                className="absolute top-[40%] left-[37%] p-1 rounded-full bg-lightGrey cursor-pointer"
                title="Change Profile Picture"
              >
                <input type="file" accept="image/*" className="hidden" />
                <FaCamera className="text-darkGrey text-sm" />
              </div>
            </div>
          </label>

          <label className="w-max cursor-pointer mx-auto">
            <div className="relative">
              <UserAvatar className="w-[4.5rem] h-[4.5rem] opacity-80" />
              <div
                className="absolute top-[40%] left-[37%] p-1 rounded-full bg-lightGrey cursor-pointer"
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
              className="bg-lighterPrimary w-full text-sm outline-none border-none"
              type="text"
              name="firstName"
            />
          </label>
        </div>

        <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs">Last Name</div>
            <input
              className="bg-lighterPrimary w-full text-sm outline-none border-none"
              type="text"
              name="lastName"
            />
          </label>
        </div>

        <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs">Bio</div>
            <input
              className="bg-lighterPrimary w-full text-sm outline-none border-none"
              type="text"
              name="bio"
            />
          </label>
        </div>

        <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs">Website</div>
            <input
              className="bg-lighterPrimary w-full text-sm outline-none border-none"
              type="text"
              name="website"
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
          className="mx-4 text-sm border border-darkGrey p-4 w-60 rounded-md overflow-y-auto bg-lighterPrimary flex flex-col gap-4"
        >
          <div className="flex items-center">
            <button
              className="hover:bg-darkGrey hover:text-lightGrey text-sm h-min p-0.5 mr-3 rounded-full"
              type="button"
              onClick={() => setShowAvatarOptions(false)}
            >
              <FaTimes className="text-sm" />
            </button>
            <span className="font-semibold">Choose Your Avatar</span>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {avatarImages.map((avatar, index) => (
              <span className="user-avatar cursor-pointer">
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
