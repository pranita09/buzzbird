import { useAuth } from "../../contexts/auth-context";
import { useTheme } from "../../contexts/theme-context";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdLogout,
} from "../../utils/icons";

const SettingsModal = ({ setShowSettingsModal }) => {
  const { logoutHandler } = useAuth();
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div
      style={styles}
      className="flex flex-col w-max rounded-md shadow-lg border border-darkGrey bg-lighterPrimary"
    >
      <>
        <button
          className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary flex items-center justify-center"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
            setShowSettingsModal(false);
          }}
        >
          {isDarkTheme ? "Light" : "Dark"} Mode
          {isDarkTheme ? (
            <MdOutlineLightMode className="ml-3" />
          ) : (
            <MdOutlineDarkMode className="ml-3" />
          )}
        </button>
        <button
          className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary text-red flex items-center justify-center"
          onClick={() => {
            logoutHandler();
            setShowSettingsModal(false);
          }}
        >
          Logout
          <MdLogout className="ml-4" />
        </button>
      </>
    </div>
  );
};

export { SettingsModal };
