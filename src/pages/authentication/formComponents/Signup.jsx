import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { PrimaryButton } from "../../../components/Buttons";
import { logoImageURL } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="md:w-1/2 px-16 pb-4">
      <div className="flex items-center justify-center max-w-[20rem]">
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

      <form className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 mt-4">
          <input
            className="p-[0.35rem] rounded-md border w-1/2"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input
            className="p-[0.35rem] rounded-md border w-1/2"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="p-[0.35rem] rounded-md border"
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <div className="relative">
          <input
            className="p-[0.35rem] rounded-md border w-full"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <AiOutlineEye className="absolute top-[0.7rem] right-3 cursor-pointer" />
          {/* <AiOutlineEyeInvisible className="absolute top-[0.9rem] right-3 cursor-pointer"  /> */}
        </div>
        <div className="relative">
          <input
            className="p-[0.35rem] rounded-md border w-full"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <AiOutlineEye className="absolute top-[0.7rem] right-3 cursor-pointer" />
          {/* <AiOutlineEyeInvisible className="absolute top-[0.9rem] right-3 cursor-pointer"  /> */}
        </div>
        <PrimaryButton type="submit">SignUp</PrimaryButton>
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
