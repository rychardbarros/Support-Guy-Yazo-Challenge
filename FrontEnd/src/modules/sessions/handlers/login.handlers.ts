import { useCallback } from 'react';

export type LoginType = {
  username: string;
  password: string;
};

export const useHandleLogin = () => {
  const handleLogin = useCallback((info: LoginType) => {
    const { username, password } = info;

    return { uid: username, password };
  }, []);
  return { handleLogin };
};
