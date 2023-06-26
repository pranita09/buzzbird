import { toast } from "react-hot-toast";

export const sharePost = (postId) => {
  navigator.clipboard.writeText(
    `https://buzzbird-v1.netlify.app/post/${postId}`
  );
  toast.success("Link copied to clipboard.");
};
