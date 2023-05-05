import { Routes, Route } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { Schedule } from 'modules/schedule/pages/Schedule';
import { Login } from 'modules/sessions/pages/Login/Login';
import { Welcome } from 'modules/welcome/pages/Welcome/Welcome';
import { WrapperRoutes } from 'shared/components/templates/WrapperRoutes/WrapperRoutes';

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
              message="O usuário não consegue acessar nossa plataforma, aparece o erro 'Não foi possível autenticar, por favor tente novamente mais tarde'., pode verificar o que pode estar acontecendo?
              Usuário:
              Email: luciano.jazz@gmail.com
              Senha: luc2Jazz5@"
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

            Estou tentando filtrar por nome "Festinha Dev Yazo" para aparecer somente essa agenda, mas o botão "Procurar" não funciona.'
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
              <Text>Relatórios top</Text>
            </WrapperRoutes>
          }
        />
      </Route>
    </Routes>
  );
};
