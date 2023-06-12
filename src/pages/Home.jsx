import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { useAuth } from "../contexts/auth-context";
import { useTheme } from "../contexts/theme-context";

const Home = () => {
  const { logoutHandler } = useAuth();
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  return (
    <div className="dark:bg-darkGrey dark:text-lightGrey transition-all duration-500">
      <h1>Home</h1>
      <button onClick={logoutHandler}>Logout</button>
      <br />
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Theme{isDarkTheme ? "Dark" : "Light"}
      </button>
      <PrimaryButton>Check Bg color</PrimaryButton>
      <SecondaryButton>Check Bg Color </SecondaryButton>
    </div>
  );
};

export { Home };
