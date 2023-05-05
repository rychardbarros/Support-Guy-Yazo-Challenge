import { APIStatus, useApiStatus } from 'shared/hooks/useApiStatus';
import { ILogin } from '../interfaces/login.interfaces';
import {
  ICreateLoginAPI,
  ICreateLoginDTO,
} from '../interfaces/dtos/login.create.dtos';
import { useLoginRepository } from '../repositories/implementations/login.repository';
import { useCreateLoginController } from '../useCases/login/createLogin/createLogin.controller';

export type UseDataClipQueryData = {
  status: APIStatus;
  data: ILogin[];
  createLogin: (data: ICreateLoginDTO) => ICreateLoginAPI;
};
export const useLogin = (): UseDataClipQueryData => {
  const { changeStatus, status } = useApiStatus();
  const repository = useLoginRepository();

  const createController = useCreateLoginController({
    repository,
    changeStatus,
  });

  return {
    status,
    data: repository.data,
    createLogin: createController.handle,
  };
};
