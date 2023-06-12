import { useAuth } from "../contexts/auth-context";

const Home = () => {
  const { logoutHandler } = useAuth();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export { Home };
