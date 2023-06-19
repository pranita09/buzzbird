import { useRef, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { PrimaryButton, UserAvatar } from "..";
import { FaImage, FaSmile, MdCancel } from "../../utils/icons";
import { usePosts } from "../../contexts/post-context";
import { actionTypes } from "../../utils/constants";
import { toast } from "react-hot-toast";
import { uploadMedia } from "../../utils/uploadMedia";

// const postData = {
//   input: "Hey",
//   media: "",
//   mediaAlt: "",
// };

const NewPost = () => {
  const { currentUser } = useAuth();
  const {
    postsState: { postInput, postMedia, postMediaAlt },
    postsDispatch,
    createPostHandler,
  } = usePosts();
  const { GET_POST_DATA } = actionTypes;
  const [input, setInput] = useState("");
  const [media, setMedia] = useState(null);

  const newPostRef = useRef();

  console.log(input, media);

  const submitPostHandler = (e) => {
    e.preventDefault();
    toast.success("Adding new post");

    if (media) {
      const resp = uploadMedia(media);
      console.log(resp);
      createPostHandler({
        input,
        media: resp.URL,
        mediaAlt: resp.original_filename,
      });
    } else {
      createPostHandler({ input, media: "", mediaAlt: "" });
    }
    setInput("");
    setMedia(null);
    newPostRef.current.innerText = "";
  };

  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b border-darkGrey px-4 py-3 cursor-text dark:border-lightGrey">
      <UserAvatar user={currentUser} className="h-9 w-9" />
      <form className="flex flex-col gap-4" onSubmit={submitPostHandler}>
        <div
          // role="textbox"
          // ref={newPostRef}
          // contentEditable="true"
          // data-text="What is happening?!"
          className="w-full break-all outline-none mt-1.5"
          // onInput={(e) => setInput(e.currentTarget.textContent)}
        >
          <input
            type="text"
            ref={newPostRef}
            value={input}
            className="w-full break-all outline-none mt-1.5"
            placeholder="What is happening?!"
            onChange={(e) => setInput(e.target.value)}
          />
          {media ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(media)}
                alt="demo"
                className="w-full h-auto rounded-md"
              />
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

        <div className="ml-auto flex items-center gap-4">
          <label className="cursor-pointer text-xl">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                Math.round(e.target.files[0].size / 1024000) > 1
                  ? toast.error("File size should not be more than 1Mb")
                  : setMedia(e.target.files[0])
              }
            />
            <FaImage />
          </label>
          <label className="cursor-pointer text-xl">
            <input className="hidden" />
            <FaSmile />
          </label>
          <PrimaryButton
            type="submit"
            className="py-1 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() && !media}
          >
            Post
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export { NewPost };
