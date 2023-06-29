import { useAuth, useTheme } from "../../index";
import { styles } from "../../utils/constants";
import {
  MdLogout,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "../../utils/icons";

const SettingsModal = ({ setShowSettingsModal }) => {
  const { logoutHandler } = useAuth();
  const { isDarkTheme, setIsDarkTheme } = useTheme();

  return (
    <div
      style={styles}
      className="flex flex-col w-max rounded-md shadow-lg border border-darkGrey bg-lighterPrimary dark:bg-darkGrey p-4 dark:text-lightGrey"
    >
      <>
        <button
          className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary dark:hover:bg-darkPrimary flex items-center justify-center"
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
          className="py-2 px-4 text-left cursor-pointer rounded-md hover:bg-lightPrimary dark:hover:bg-darkPrimary text-red flex items-center justify-center"
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
