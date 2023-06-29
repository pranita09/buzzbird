import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { ToastWrapper } from "./components";

function App() {
  return (
    <div className={`App dark:bg-darkColor`}>
      <ToastWrapper />
      <AppRoutes />
    </div>
  );
}

export default App;
