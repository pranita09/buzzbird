import { toast } from "react-hot-toast";

export const sharePost = async (postId) => {
  try {
    await navigator.share({
      title: "BuzzBird",
      text: "Check out this post",
      url: `https://buzzbird-v1.netlify.app/post/${postId}`,
    });
  } catch (error) {
    console.error("Error while sharing: ", error);
    toast.error("Something went wrong!");
  }
};
