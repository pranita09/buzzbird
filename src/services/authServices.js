import axios from "axios";

const loginService = async (username, password) =>
  await axios.post("/api/auth/login", {
    username: username,
    password: password,
  });

const signupService = async (firstName, lastName, username, password) =>
  await axios.post("/api/auth/signup", {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

export { loginService, signupService };
