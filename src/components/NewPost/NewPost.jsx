import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { PrimaryButton, UserAvatar } from "..";
import { FaImage, FaSmile, MdCancel } from "../../utils/icons";

const NewPost = () => {
  const { currentUser } = useAuth();
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b border-darkGrey px-4 py-3 cursor-text dark:border-lightGrey">
      <UserAvatar user={currentUser} className="h-9 w-9" />
      <form className="flex flex-col gap-4">
        <div
          role="textbox"
          contentEditable="true"
          placeholder="What's happening?"
          className="w-full break-all outline-none mt-1.5"
        >
          {image && (
            <div className="relative">
              <img src="" alt="demo" className="w-full h-auto rounded-md" />
              <button type="button" className="absolute top-2 left-2 text-lg">
                <MdCancel />
              </button>
            </div>
          )}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <label className="cursor-pointer text-xl">
            <input type="file" accept="image/*" className="hidden" />
            <FaImage />
          </label>
          <label className="cursor-pointer text-xl">
            <input className="hidden" />
            <FaSmile />
          </label>
          <PrimaryButton
            type="submit"
            className="py-1 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled=""
          >
            Post
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export { NewPost };
