import { Routes, Route } from 'react-router-dom';
import { Schedule } from 'modules/schedule/pages/Schedule';
import { Login } from 'modules/sessions/pages/Login/Login';
import { Welcome } from 'modules/welcome/pages/Welcome/Welcome';
import { WrapperRoutes } from 'shared/components/templates/WrapperRoutes/WrapperRoutes';
import { Reports } from '../../modules/reports/pages/Reports';

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
            <WrapperRoutes
              title="Desafio 1 - Login"
              message="Nenhum usuário está conseguindo acessar nossa plataforma! Esta sempre retornando o erro 'Não foi possível autenticar, por favor tente novamente mais tarde'. Pode verificar o que pode estar acontecendo?"
            >
              <Login />
            </WrapperRoutes>
          }
        />

        <Route
          path="schedules"
          element={
            <WrapperRoutes
              title="Desafio 2 - Agenda"
              message='Não está sendo possível filtrar as agendas.

            Estou tentando filtrar por nome "Festinha Dev Yazo" para aparecer somente essa agenda, mas não funciona.'
            >
              <Schedule />
            </WrapperRoutes>
          }
        />

        <Route
          path="reports"
          element={
            <WrapperRoutes
              title="Desafio 3 - Relatórios"
              message="Para realizar relatórios, é necessário acessar nosso banco de dados

            URL: postgresql://postgres:?????????????????????@yazo-support-guy-challenge.???????.us-east-1.rds.amazonaws.com:5432

            E realizar as respectivas querys no banco de dados."
            >
              <Reports />
            </WrapperRoutes>
          }
        />
      </Route>
    </Routes>
  );
};
