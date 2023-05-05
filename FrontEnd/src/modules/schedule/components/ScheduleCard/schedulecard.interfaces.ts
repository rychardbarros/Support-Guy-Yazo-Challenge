import { ITag } from 'modules/schedule/interfaces/schedule.interfaces';
import { IUser } from 'modules/sessions/interfaces/login.interfaces';

export type ScheduleCardProps = {
  id: number;
  startTime: string;
  endTime: string;
  tag: ITag;
  title: string;
  users: IUser[];
};
