import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Modal } from "@mui/material";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { PrimaryButton, SecondaryButton, UserAvatar } from "..";
import { useAuth, usePosts, useTheme } from "../../index";
import { styles } from "../../utils/constants";
import {
  MdCancel,
  MdInsertEmoticon,
  MdOutlineAddPhotoAlternate,
} from "../../utils/icons";
import { uploadMedia } from "../../utils/uploadMedia";

const PostModal = ({ post, setShowPostModal, setShowOptions }) => {
  const { isDarkTheme } = useTheme();
  const { currentUser } = useAuth();
  const { createPostHandler, editPostHandler } = usePosts();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [content, setContent] = useState(post || {});
  const [media, setMedia] = useState(null);

  const postRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (post) {
      const toastId = toast.loading("Updating post...");
      if (media) {
        const resp = await uploadMedia(media);
        editPostHandler(post._id, {
          content: content?.content,
          media: resp.url,
          mediaAlt: resp.original_filename,
        });
      } else {
        editPostHandler(post._id, {
          content: content?.content,
          media: content?.mediaURL,
          mediaAlt: content?.mediaAlt,
        });
      }
      toast.success("Updated post successfully", { id: toastId });
      setShowOptions((prev) => !prev);
    } else {
      const toastId = toast.loading("Creating new post..");
      if (media) {
        const response = await uploadMedia(media);
        createPostHandler({
          content: content?.content,
          media: response.url,
          mediaAlt: response.original_filename,
        });
      } else {
        createPostHandler({
          content: content?.content,
          media: "",
          mediaAlt: "",
        });
      }
      toast.success("Added new post successfully", { id: toastId });
    }
    setShowPostModal(false);
    setContent({});
    setMedia(null);
    setShowEmojiPicker(false);
    postRef.current.innterText = "";
  };

  return (
    <div
      style={styles}
      className="grid grid-cols-[2.5rem_1fr] gap-2 items-start bg-lighterPrimary text-sm border-darkGrey px-4 py-3 cursor-text w-[90%] sm:w-[60%] xl:w-[45%] shadow-dark shadow-lg rounded-md border dark:bg-darkGrey"
    >
      <UserAvatar user={currentUser} className="h-10 w-10" />
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="w-full break-all outline-none mt-1.5 bg-lighterPrimary dark:bg-darkGrey">
          <textarea
            ref={postRef}
            value={content?.content}
            className="w-full break-all outline-none bg-lighterPrimary dark:bg-darkGrey resize-none h-[6rem] dark:text-lightGrey"
            placeholder="What is happening?!"
            onChange={(e) =>
              setContent((prev) => ({ ...prev, content: e.target.value }))
            }
          />

          {content?.mediaURL || media ? (
            <div className="relative">
              {content?.mediaURL?.split("/")[4] === "video" ||
              media?.type?.includes("video") ? (
                <video controls className="w-full h-auto rounded-md">
                  <source
                    src={media ? URL.createObjectURL(media) : content?.mediaURL}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={media ? URL.createObjectURL(media) : content?.mediaURL}
                  alt={content?.mediaAlt || media.name.split(".")[0]}
                  className="w-full max-h-[350px] rounded-md object-cover"
                />
              )}

              <button
                type="button"
                className="absolute top-1.5 left-2 text-lg"
                onClick={() =>
                  content?.mediaURL
                    ? setContent((prev) => ({
                        ...prev,
                        mediaURL: null,
                        mediaAlt: "",
                      }))
                    : setMedia(null)
                }
              >
                <MdCancel />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="flex justify-between gap-2">
          <div className="flex justify-center items-center gap-3">
            <label className="cursor-pointer text-lg">
              <input
                type="file"
                accept="image/*, video/*"
                className="hidden"
                onChange={(e) => setMedia(e.target.files[0])}
              />
              <MdOutlineAddPhotoAlternate
                className="text-xl scale-110 hover:scale-125 dark:text-lightGrey"
                title="Add Photo/GIF/Video"
              />
            </label>
            <label
              className="cursor-pointer text-xl"
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            >
              <MdInsertEmoticon
                className="text-xl scale-110 hover:scale-125 dark:text-lightGrey"
                title="Add Emoji"
              />
            </label>
          </div>
          <div className="flex gap-3">
            <PrimaryButton
              type="submit"
              className="py-1.5 px-5 rounded-md disabled:opacity-80 border-lightPrimary"
              disabled={!content?.content?.trim() && !media}
            >
              {post ? "Save" : "Post"}
            </PrimaryButton>
            <SecondaryButton
              type="reset"
              className="py-1 px-4 rounded-md border-none"
              onClick={() => {
                setShowPostModal((prev) => !prev);
                post && setShowOptions((prev) => !prev);
              }}
            >
              Cancel
            </SecondaryButton>
          </div>
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
              setContent((prev) => ({
                ...prev,
                content: prev.content
                  ? prev.content + emoji.native
                  : emoji.native,
              }));
              setShowEmojiPicker(false);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export { PostModal };
