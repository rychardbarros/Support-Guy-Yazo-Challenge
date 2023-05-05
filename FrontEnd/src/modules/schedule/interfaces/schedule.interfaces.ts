import { IUser } from 'modules/sessions/interfaces/login.interfaces';

export interface ISchedule {
  id: number;
  start_time: string;
  end_time: string;
  tag: ITag;
  title: string;
  users: IUser[];
}

export type ITag = {
  id: number;
  color: string;
  title: string;
};
