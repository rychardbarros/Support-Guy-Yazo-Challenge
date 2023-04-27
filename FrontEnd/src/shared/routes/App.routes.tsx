import { Routes, Route } from "react-router-dom";
import { Schedule } from "../../modules/schedule/pages/Schedule";
import { Login } from "../../modules/sessions/pages/Login/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Login />
            </div>
          }
        />
        <Route path="schedules" element={<Schedule />} />
      </Route>
    </Routes>
  );
};
