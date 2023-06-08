import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

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
      <h1 className="text-5xl font-bold underline">Hello there!</h1>
    </div>
  );
}

export default App;
