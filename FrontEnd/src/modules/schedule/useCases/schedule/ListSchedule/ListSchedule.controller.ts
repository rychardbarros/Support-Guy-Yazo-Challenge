import { useCallback } from 'react';
import {
  IListScheduleAPI,
  IListScheduleDTO,
} from 'modules/schedule/interfaces/dtos/schedule.list.dtos';
import { IScheduleRepository } from 'modules/schedule/repositories/IScheduleRepository';
import { useListScheduleUseCase } from './ListSchedule.useCase';
import { APIStatus } from 'shared/hooks/useApiStatus';

type UseListScheduleController = {
  changeStatus: (status: APIStatus) => void;
  repository: IScheduleRepository;
};

export const useListScheduleController = ({
  repository,
  changeStatus,
}: UseListScheduleController) => {
  const { execute } = useListScheduleUseCase(repository);

  const handle = useCallback(
    async (data: IListScheduleDTO) => {
      try {
        changeStatus('pending');
        const response = await execute(data);

        changeStatus('listSuccess');

        return response;
      } catch (err) {
        changeStatus('error');
      }
      return {} as IListScheduleAPI;
    },
    [changeStatus, execute]
  );

  return { handle };
};
