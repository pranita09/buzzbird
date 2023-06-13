import { SearchBar } from "../components/SearchBar";
import { useAuth } from "../contexts/auth-context";
import { useTheme } from "../contexts/theme-context";

const Home = () => {
  const { logoutHandler } = useAuth();
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  return (
    <div className="dark:bg-darkGrey dark:text-lightGrey transition-all duration-500 min-h-screen">
      <h1>Home</h1>
      <button onClick={logoutHandler}>Logout</button>
      <br />
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Theme{isDarkTheme ? "Dark" : "Light"}
      </button>
      <br />
      <br />
      <SearchBar />
    </div>
  );
};

export { Home };
