import { createLoginAPI } from 'modules/sessions/apis/login.apis';
import { ICreateLoginDTO } from 'modules/sessions/interfaces/dtos/login.create.dtos';
import { ILoginRepository } from 'modules/sessions/repositories/ILoginRepository';
import { useCallback } from 'react';

export const useCreateLoginUseCase = ({ create }: ILoginRepository) => {
  const execute = useCallback(
    async (data: ICreateLoginDTO) => {
      const response = await createLoginAPI(data);
      create(response.data);

      return response;
    },
    [create]
  );

  return { execute };
};
