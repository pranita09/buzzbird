import { useNavigate } from "react-router-dom";
import { errorImage } from "../../utils/constants";
import { FaAngleDoubleLeft } from "../../utils/icons";

const PageNotFound = () => {
  const navigate = useNavigate();
  document.title = "Page Not Found";
  return (
    <div className="h-[110vh] flex flex-col justify-center items-center gap-10 -mt-10 dark:text-lightGrey">
      <img
        src={errorImage}
        alt="404Image"
        className="px-2 w-full max-w-[30rem]"
      />
      <div
        className="flex -mt-6 items-center justify-center gap-2 hover:scale-110 cursor-pointer py-2 px-4 border rounded-md"
        onClick={() => navigate("/")}
      >
        <FaAngleDoubleLeft />
        <span>Back to Home</span>
      </div>
    </div>
  );
};

export { PageNotFound };
