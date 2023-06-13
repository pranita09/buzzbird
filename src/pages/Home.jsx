import { SuggestedUsers } from "../components/SuggestedUsers";
import { useAuth } from "../contexts/auth-context";
import { useTheme } from "../contexts/theme-context";

const Home = () => {
  const { logoutHandler } = useAuth();
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  return (
    <div className="dark:bg-darkGrey dark:text-lightGrey transition-all duration-500 min-h-screen">
      <SuggestedUsers />
      <br />
      <br />
      <button onClick={logoutHandler}>Logout</button>
      <br />
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Theme{isDarkTheme ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export { Home };
