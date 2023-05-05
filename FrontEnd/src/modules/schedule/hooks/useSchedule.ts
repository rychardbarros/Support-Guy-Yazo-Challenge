import { APIStatus, useApiStatus } from 'shared/hooks/useApiStatus';
import { ISchedule } from '../interfaces/schedule.interfaces';
import {
  IListScheduleAPI,
  IListScheduleDTO,
} from '../interfaces/dtos/schedule.list.dtos';
import { useScheduleRepository } from '../repositories/implementations/schedule.repository';
import { useListScheduleController } from '../useCases/schedule/ListSchedule/ListSchedule.controller';

export type UseScheduleData = {
  status: APIStatus;
  schedules: ISchedule[];
  listSchedule: (data: IListScheduleDTO) => IListScheduleAPI;
};
export const useSchedule = (): UseScheduleData => {
  const { changeStatus, status } = useApiStatus();
  const repository = useScheduleRepository();

  const listController = useListScheduleController({
    repository,
    changeStatus,
  });

  return {
    status,
    schedules: repository.data,
    listSchedule: listController.handle,
  };
};
