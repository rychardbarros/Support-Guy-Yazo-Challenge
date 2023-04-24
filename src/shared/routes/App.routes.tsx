import { Routes, Route } from "react-router-dom";
import { Initial } from "../../modules/sessions/pages/Initial/Initial";
import { Login } from "../../modules/sessions/pages/Login/Login";
import { Schedule } from "../../modules/schedule/page/Schedule";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Initial />} />
        <Route path="login" element={<Login />} />
        <Route path="schedules" element={<Schedule />} />
      </Route>
    </Routes>
  );
};
