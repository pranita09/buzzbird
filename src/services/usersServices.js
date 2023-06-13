import axios from "axios";

const getAllUsersService = async () => await axios.get("/api/users");

export { getAllUsersService };
