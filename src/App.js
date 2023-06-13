import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { ToastWrapper } from "./components/ToastWrapper";

function App() {
  return (
    <div className="App">
      <ToastWrapper />
      <AppRoutes />
    </div>
  );
}

export default App;
