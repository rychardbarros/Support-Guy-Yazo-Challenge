import {
  ICreateLoginAPI,
  ICreateLoginDTO,
} from 'modules/sessions/interfaces/dtos/login.create.dtos';
import { ILoginRepository } from 'modules/sessions/repositories/ILoginRepository';
import { useCallback } from 'react';

import { APIStatus } from 'shared/hooks/useApiStatus';
import { useCreateLoginUseCase } from './createLogin.useCase';
import { useToast } from '@chakra-ui/react';

type UseCreateLoginController = {
  changeStatus: (status: APIStatus) => void;
  repository: ILoginRepository;
};

export const useCreateLoginController = ({
  repository,
  changeStatus,
}: UseCreateLoginController) => {
  const { execute } = useCreateLoginUseCase(repository);
  const toast = useToast();

  const handle = useCallback(
    async (data: ICreateLoginDTO) => {
      try {
        changeStatus('pending');
        const response = await execute(data);

        changeStatus('listSuccess');

        toast({
          description: 'Seja bem-vindo!',
          status: 'success',
          variant: 'solid',
          duration: 3000,
          isClosable: true,
        });

        return response;
      } catch (err) {
        changeStatus('error');

        toast({
          description:
            'Não foi possível autenticar, por favor tente novamente mais tarde.',
          status: 'error',
          variant: 'solid',
          duration: 3000,
          isClosable: true,
        });
      }
      return {} as ICreateLoginAPI;
    },
    [changeStatus, execute]
  );

  return { handle };
};
