import { Outlet } from "react-router-dom";
import { loginPageHeroImg } from "../../utils/constants";

const Authentication = () => {
  return (
    <div className="bg-[#ccfbf1] min-h-screen flex items-center justify-center">
      <div className="bg-[white] flex rounded-2xl shadow-2xl max-w-3xl p-5 m-4">
        <Outlet />
        <div className="md:block hidden w-1/2">
          <img
            src={loginPageHeroImg}
            alt="login-page-img"
            className="max-h-[70rem] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export { Authentication };
