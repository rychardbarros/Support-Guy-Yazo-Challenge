import { IUser } from 'modules/sessions/interfaces/login.interfaces';

export interface ISchedule {
  id: number;
  start_time: string;
  end_time: string;
  tags: ITag;
  place: string;
  title: string;
  users: IUser[];
}

export type ITag = {
  id: number;
  color: string;
  title: string;
};
