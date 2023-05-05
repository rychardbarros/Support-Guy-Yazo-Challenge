import { ITag } from 'modules/schedule/interfaces/schedule.interfaces';
import { IUser } from 'modules/sessions/interfaces/login.interfaces';

export type ScheduleCardProps = {
    day: string;
    startTime: string;
    endTime: string;
    tags: ITag;
    place: string;
    title: string;
    users: IUser[];
};
