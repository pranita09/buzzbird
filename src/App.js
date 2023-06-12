import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { ToastWrapper } from "./components/ToastWrapper";

function App() {
  const [posts, setPosts] = useState();
  const getData = async () => {
    try {
      const response = await axios.get("/api/posts");
      const {
        status,
        data: { posts },
      } = response;
      if (status === 200) {
        setPosts(posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(posts);

  return (
    <div className="App">
      <ToastWrapper />
      <AppRoutes />
    </div>
  );
}

export default App;
