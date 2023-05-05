import { useCallback } from 'react';
import { IUser } from '../interfaces/login.interfaces';

export type LoginType = {
  username: string;
  password: string;
};

export type IUserAvatar = {
  sourceImage: string;
  firstName: string;
};

export const useHandleLogin = () => {
  const handleFormLogin = useCallback((info: LoginType) => {
    const { username, password } = info;

    return { uid: username, password };
  }, []);

  const handleLogin = useCallback((data: IUser | undefined): IUserAvatar => {
    console.log(data);
    if (data) {
      const { user } = data;
      console.log(user);

      return {
        sourceImage: user.source_image,
        firstName: user.first_name,
      };
    }
    return {
      sourceImage: 'src/assets/logo.png',
      firstName: 'Insira seus credenciais',
    };
  }, []);

  return { handleFormLogin, handleLogin };
};
