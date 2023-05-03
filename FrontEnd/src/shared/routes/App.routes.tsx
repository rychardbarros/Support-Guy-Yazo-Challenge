import { Routes, Route } from "react-router-dom";
import { Schedule } from "../../modules/schedule/pages/Schedule";
import { Login } from "../../modules/sessions/pages/Login/Login";
import { Welcome } from "../../modules/sessions/pages/Welcome/Welcome";
import { WrapperRoutes } from "./routes.styled";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            <WrapperRoutes
            >
              <Welcome/>
            </WrapperRoutes>
          }
        />

        <Route path="schedules" element={
        <WrapperRoutes
           >
       <Schedule />
        </WrapperRoutes>

        } />
        <Route path="login" element={
         <WrapperRoutes
       >
           <Login />
       </WrapperRoutes>

     }

        />
      </Route>
    </Routes>
  );
};
