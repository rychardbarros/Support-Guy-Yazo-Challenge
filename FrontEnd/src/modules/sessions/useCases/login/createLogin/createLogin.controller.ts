import { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import {
  ICreateLoginAPI,
  ICreateLoginDTO,
} from 'modules/sessions/interfaces/dtos/login.create.dtos';
import { IUserRepository } from 'modules/sessions/repositories/IUserRepository';

import { APIStatus } from 'shared/hooks/useApiStatus';
import { useCreateLoginUseCase } from 'modules/schedule/useCases/schedule/ListSchedule/ListSchedule.useCase';

type UseCreateLoginController = {
  changeStatus: (status: APIStatus) => void;
  repository: IUserRepository;
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

        changeStatus('success');

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
