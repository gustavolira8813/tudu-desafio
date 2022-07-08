import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";
import Profile from "../pages/Profile";
import Planner from "../pages/Planner";
import TaskOpenned from "../pages/TaskOpenned";
import App from "../App";
const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/app" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="main" element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="planner" element={<Planner />} />
      <Route path="open" element={<TaskOpenned />} />
    </Routes>
  );
};

export default Rotas;
