import { api } from 'shared/services/api';
import {
  IListScheduleAPI,
  IListScheduleDTO,
} from '../interfaces/dtos/schedule.list.dtos';

const validToken =
  'NTI.qqG90TMWhx8TxUOumwctrdQiHdPFAJmS5dM1KW4RXE07QPweEVKvLZMFQzbn';

export const listScheduleAPI = ({
  page,
  search,
}: IListScheduleDTO): IListScheduleAPI =>
  api.get('schedules', {
    headers: {
      Authorization: 'Bearer ' + validToken,
    },
    params: {
      page,
      search,
    },
  });
