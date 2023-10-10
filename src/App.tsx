import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import UserTasks from "./pages/UserTasks";
import { Link } from "@mui/icons-material";

function App() {
  return (
    <>
      <Link></Link>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id/userdetails/" element={<UserDetails />} />
          <Route path="/:id/userdetails/tasks" element={<UserTasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
