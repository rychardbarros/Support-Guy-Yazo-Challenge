import {
  ButtonLogin,
  InputLogin,
  InputPassword,
  Logo,
  WrapperLogin,
} from "./login.styled";

export const Login = () => {
  return (
    <WrapperLogin>
      <Logo src="/src/assets/logo.png"></Logo>
      <h1>Desafio suporte guy</h1>
      <InputLogin></InputLogin>
      <InputPassword></InputPassword>
      <ButtonLogin>Login</ButtonLogin>
    </WrapperLogin>
  );
};
