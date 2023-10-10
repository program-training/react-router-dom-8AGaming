import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UsersProvider from "./utils/GetUsers.tsx";
import TasksProvider from "./utils/GeTasks.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </UsersProvider>
  </React.StrictMode>
);
