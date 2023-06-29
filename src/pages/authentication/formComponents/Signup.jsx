import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../../components";
import { useAuth } from "../../../index";
import { logoImageURL } from "../../../utils/constants";
import { AiOutlineEye, AiOutlineEyeInvisible } from "../../../utils/icons";

const Signup = () => {
  const navigate = useNavigate();
  const { signupHandler } = useAuth();

  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    pwdMatch: true,
    show: { pwd: false, confirmPwd: false },
  });

  document.title = "SignUp | BuzzBird";

  const signupFormInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "confirmPassword") {
      setSignupDetails({
        ...signupDetails,
        [name]: value,
        pwdMatch: value === signupDetails.password ? true : false,
      });
    } else if (name === "password") {
      setSignupDetails({
        ...signupDetails,
        [name]: value,
        pwdMatch: value === signupDetails.confirmPassword ? true : false,
      });
    } else {
      setSignupDetails({ ...signupDetails, [name]: value });
    }
  };

  const signupFormSubmitHandler = (event) => {
    event.preventDefault();
    signupHandler(signupDetails);
  };

  return (
    <div className="md:w-1/2 px-16 pb-4">
      <div className="flex items-center justify-center max-w-[20rem] mx-auto">
        <img
          src={logoImageURL}
          alt="logo-img"
          className="w-full object-cover self-center"
        />
      </div>
      <h2 className="font-bold text-2xl text-center">SignUp</h2>
      <p className="text-sm my-4 text-center">
        Join the buzz, spread your wings, and soar with BuzzBird!
      </p>

      <form className="flex flex-col gap-4" onSubmit={signupFormSubmitHandler}>
        <div className="flex flex-row gap-3 mt-4">
          <input
            className="p-[0.35rem] rounded-md border w-1/2"
            type="text"
            name="firstName"
            value={signupDetails.firstName}
            placeholder="First Name"
            onChange={signupFormInputHandler}
            required
          />
          <input
            className="p-[0.35rem] rounded-md border w-1/2"
            type="text"
            name="lastName"
            value={signupDetails.lastName}
            placeholder="Last Name"
            onChange={signupFormInputHandler}
            required
          />
        </div>
        <input
          className="p-[0.35rem] rounded-md border"
          type="text"
          name="username"
          value={signupDetails.username}
          placeholder="Username"
          onChange={signupFormInputHandler}
          required
        />
        <div className="relative">
          <input
            className="p-[0.35rem] rounded-md border w-full"
            type={signupDetails.show.pwd ? "text" : "password"}
            name="password"
            value={signupDetails.password}
            placeholder="Password"
            onChange={signupFormInputHandler}
            required
          />
          {!signupDetails.show.pwd ? (
            <AiOutlineEyeInvisible
              className="absolute top-[0.7rem] right-3 cursor-pointer"
              onClick={() =>
                setSignupDetails({
                  ...signupDetails,
                  show: { ...signupDetails.show, pwd: !signupDetails.show.pwd },
                })
              }
            />
          ) : (
            <AiOutlineEye
              className="absolute top-[0.7rem] right-3 cursor-pointer"
              onClick={() =>
                setSignupDetails({
                  ...signupDetails,
                  show: { ...signupDetails.show, pwd: !signupDetails.show.pwd },
                })
              }
            />
          )}
        </div>
        <div className="relative">
          <input
            className="p-[0.35rem] rounded-md border w-full"
            type={signupDetails.show.confirmPwd ? "text" : "password"}
            name="confirmPassword"
            value={signupDetails.confirmPassword}
            placeholder="Confirm Password"
            onChange={signupFormInputHandler}
            required
          />
          {!signupDetails.show.confirmPwd ? (
            <AiOutlineEyeInvisible
              className="absolute top-[0.7rem] right-3 cursor-pointer"
              onClick={() =>
                setSignupDetails({
                  ...signupDetails,
                  show: {
                    ...signupDetails.show,
                    confirmPwd: !signupDetails.show.confirmPwd,
                  },
                })
              }
            />
          ) : (
            <AiOutlineEye
              className="absolute top-[0.7rem] right-3 cursor-pointer"
              onClick={() =>
                setSignupDetails({
                  ...signupDetails,
                  show: {
                    ...signupDetails.show,
                    confirmPwd: !signupDetails.show.confirmPwd,
                  },
                })
              }
            />
          )}
          {!signupDetails.pwdMatch && (
            <p className="text-xs p-0 m-0 text-red">Password does not match.</p>
          )}
        </div>
        <PrimaryButton
          type="submit"
          className="py-2 rounded-md"
          disabled={!signupDetails.pwdMatch}
        >
          SignUp
        </PrimaryButton>
      </form>
      <p className="my-[1rem] text-sm">
        Already have an account?{" "}
        <span
          className="font-bold text-darkPrimary hover:underline hover:cursor-pointer"
          onClick={() => navigate("/auth/login")}
        >
          LogIn
        </span>
      </p>
    </div>
  );
};

export { Signup };
