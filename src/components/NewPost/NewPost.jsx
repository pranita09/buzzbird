import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Modal } from "@mui/material";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { PrimaryButton, UserAvatar } from "..";
import { useAuth, usePosts, useTheme } from "../../index";
import { styles } from "../../utils/constants";
import {
  MdCancel,
  MdInsertEmoticon,
  MdOutlineAddPhotoAlternate,
} from "../../utils/icons";
import { uploadMedia } from "../../utils/uploadMedia";

const NewPost = () => {
  const { isDarkTheme } = useTheme();
  const { currentUser } = useAuth();
  const { createPostHandler } = usePosts();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const newPostRef = useRef();

  const submitPostHandler = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Creating new post..");
    if (media) {
      const response = await uploadMedia(media);
      createPostHandler({
        content,
        media: response.url,
        mediaAlt: response.original_filename,
      });
    } else {
      createPostHandler({ content, media: "", mediaAlt: "" });
    }
    toast.success("Added new post successfully", { id: toastId });
    setContent("");
    setMedia(null);
    setShowEmojiPicker(false);
    newPostRef.current.innerText = "";
  };

  return (
    <div className="grid grid-cols-[2.25rem_1fr] gap-2 items-start text-sm border-b border-darkGrey px-4 py-3 cursor-text dark:border-lightGrey">
      <UserAvatar user={currentUser} className="h-9 w-9" />
      <form className="flex flex-col gap-2" onSubmit={submitPostHandler}>
        <div className="w-full outline-none mt-1.5 h-auto">
          <textarea
            ref={newPostRef}
            value={content}
            rows={2}
            className="w-full dark:bg-darkColor outline-none resize-none h-auto"
            placeholder="What is happening?!"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {media ? (
            <div className="relative">
              {media?.type?.includes("video") ? (
                <video controls className="w-full h-auto rounded-md">
                  <source src={URL.createObjectURL(media)} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={URL.createObjectURL(media)}
                  alt="demo"
                  className="w-full h-auto rounded-md"
                />
              )}

              <button
                type="button"
                className="absolute top-1.5 left-2 text-lg"
                onClick={() => setMedia(null)}
              >
                <MdCancel />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="ml-auto flex items-center gap-4 mt-1.5">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*, video/*"
              className="hidden"
              onChange={(e) => setMedia(e.target.files[0])}
            />
            <MdOutlineAddPhotoAlternate
              className="text-xl scale-110 hover:scale-125"
              title="Add Photo/GIF/Video"
            />
          </label>
          <label
            className="cursor-pointer"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            <MdInsertEmoticon
              className="text-xl scale-110 hover:scale-125"
              title="Add Emoji"
            />
          </label>
          <PrimaryButton
            type="submit"
            className="py-1 px-4 rounded-md disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={!content.trim() && !media}
          >
            Post
          </PrimaryButton>
        </div>
      </form>

      <Modal open={showEmojiPicker} onClose={() => setShowEmojiPicker(false)}>
        <div style={styles}>
          <Picker
            data={data}
            emojiSize={20}
            emojiButtonSize={28}
            maxFrequentRows={0}
            navPosition="bottom"
            previewPosition="none"
            theme={isDarkTheme ? "dark" : "light"}
            onEmojiSelect={(emoji) => {
              setContent(content + emoji.native);
              setShowEmojiPicker(false);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export { NewPost };
