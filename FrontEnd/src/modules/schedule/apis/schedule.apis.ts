import { api } from 'shared/services/api';
import {
  IListScheduleAPI,
  IListScheduleDTO,
} from '../interfaces/dtos/schedule.list.dtos';

const validToken = 'Mzk.92idKDVN3U3jTQBJPE2aJ3Kph2Kx9gLCH3etn9MNRT3KGFvDbLqyCwrCoqpH'

export const listScheduleAPI = (data: IListScheduleDTO): IListScheduleAPI =>
  api.get('schedules', {
    headers: {
      'Authorization': 'Bearer ' + validToken
    }
  });
