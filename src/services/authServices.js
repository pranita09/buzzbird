import axios from "axios";

const loginService = async (username, password) =>
  await axios.post("/api/auth/login", {
    username: username,
    password: password,
  });

export { loginService };
