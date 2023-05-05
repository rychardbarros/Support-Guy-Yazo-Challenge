import { api } from 'shared/services/api';
import {
  IListScheduleAPI,
  IListScheduleDTO,
} from '../interfaces/dtos/schedule.list.dtos';

const validToken = 'NTE.N8Uws75OshcSqas5g1uUUoHUaelocU9pYq_q8dVmYYZlKHWbdRwDu9EgJeWq'

export const listScheduleAPI = (data: IListScheduleDTO): IListScheduleAPI =>
  api.get('schedules', {
    headers: {
      'Authorization': 'Bearer ' + validToken
    }
  });
