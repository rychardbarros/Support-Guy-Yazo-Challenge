import { ITag } from 'modules/schedule/interfaces/schedule.interfaces';
import { IUser } from 'modules/sessions/interfaces/login.interfaces';

export type ScheduleCardProps = {
    id: number;
    day: string;
    startTime: string;
    endTime: string;
    tags: ITag;
    title: string;
    users: IUser[];
};
