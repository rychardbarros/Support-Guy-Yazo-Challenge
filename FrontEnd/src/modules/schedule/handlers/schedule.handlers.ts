import { useCallback } from 'react';
import { ISchedule } from '../interfaces/schedule.interfaces';
import { ScheduleCardProps } from '../components/ScheduleCard/schedulecard.interfaces';

export const useHandleSchedule = () => {
  const handleSchedule = useCallback(
    (schedule: ISchedule): ScheduleCardProps => {
      const { id, start_time, end_time, tag, title, users } = schedule;

      return {
        id,
        startTime: start_time,
        endTime: end_time,
        tag,
        title,
        users,
      };
    },
    []
  );

  return { handleSchedule };
};
