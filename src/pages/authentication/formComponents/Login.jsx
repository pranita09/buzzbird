import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { PrimaryButton, SecondaryButton } from "../../../components/Buttons";
import { logoImageURL } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="md:w-1/2 px-16 pb-4">
      <div className="flex items-center justify-center max-w-[20rem]">
        <img
          src={logoImageURL}
          alt="logo-img"
          className="w-full object-cover"
        />
      </div>
      <h2 className="font-bold text-2xl text-center">Login</h2>
      <p className="text-sm my-4 text-center">
        Unlock the Buzz, Spread your Wings!
      </p>

      <form className="flex flex-col gap-4">
        <input
          className="p-[0.35rem] mt-4 rounded-md border"
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
        <PrimaryButton type="submit">Login</PrimaryButton>
        <SecondaryButton type="submit">Login as a Guest</SecondaryButton>
      </form>
      <p className="my-[1rem] text-sm">
        New to BuzzBird?{" "}
        <span
          className="font-bold text-darkPrimary hover:underline hover:cursor-pointer"
          onClick={() => navigate("/auth/signup")}
        >
          SignUp
        </span>
      </p>
    </div>
  );
};

export { Login };
