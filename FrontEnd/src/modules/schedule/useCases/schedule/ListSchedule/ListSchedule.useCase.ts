import { useCallback } from 'react';
import { listScheduleAPI } from 'modules/schedule/apis/schedule.apis';
import { IScheduleRepository } from 'modules/schedule/repositories/IScheduleRepository';
import { IListScheduleDTO } from 'modules/schedule/interfaces/dtos/schedule.list.dtos';

export const useListScheduleUseCase = ({ appendList }: IScheduleRepository) => {
  const execute = useCallback(
    async (data: IListScheduleDTO) => {
      const response = await listScheduleAPI(data);
      appendList?.(response.data.data);

      return response.data;
    },
    [appendList]
  );

  return { execute };
};
