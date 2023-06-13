import axios from "axios";

const getAllPostsService = async () => await axios.get("/api/posts");

export { getAllPostsService };
