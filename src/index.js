import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/auth-context";
import { ThemeProvider, useTheme } from "./contexts/theme-context";
import { PostsProvider, usePosts } from "./contexts/post-context";
import { UsersProvider, useUsers } from "./contexts/user-context";

export { useAuth, useTheme, usePosts, useUsers };

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <UsersProvider>
            <PostsProvider>
              <App />
            </PostsProvider>
          </UsersProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
