import { Routes, Route } from 'react-router-dom';
import { Schedule } from '../../modules/schedule/pages/Schedule';
import { Login } from '../../modules/sessions/pages/Login/Login';
import { Welcome } from '../../modules/sessions/pages/Welcome/Welcome';
import { Header } from '../components/templates/Header/Header';
import { WrapperRoutes } from '../components/templates/WrapperRoutes/WrapperRoutes';
import { Text } from '@chakra-ui/react';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            <WrapperRoutes hasHeader={false}>
              <Welcome />
            </WrapperRoutes>
          }
        />

        <Route
          path="login"
          element={
            <WrapperRoutes title="Desafio 1 - Login">
              <Login />
            </WrapperRoutes>
          }
        />

        <Route
          path="schedules"
          element={
            <WrapperRoutes title="Desafio 2 - Agenda">
              <Schedule />
            </WrapperRoutes>
          }
        />

        <Route
          path="reports"
          element={
            <WrapperRoutes title="Desafio 3 - Relatórios">
              <Text>Relatórios top</Text>
            </WrapperRoutes>
          }
        />
      </Route>
    </Routes>
  );
};
