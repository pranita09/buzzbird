import { toast } from "react-hot-toast";

const postData = (id) => ({
  title: "BuzzBird",
  text: "Check out this post",
  url: `https://buzzbird-v1.netlify.app/post/${id}`,
});

export const sharePost = async (postId) => {
  if (navigator.share && navigator.canShare(postData(postId))) {
    try {
      await navigator.share(postData(postId));
    } catch (error) {
      console.error("Error while sharing: ", error);
      toast.error("Something went wrong!");
    }
  } else {
    navigator.clipboard.writeText(
      `https://buzzbird-v1.netlify.app/post/${postId}`
    );
    toast.success("Link Copied. Start sharing!");
  }
};
