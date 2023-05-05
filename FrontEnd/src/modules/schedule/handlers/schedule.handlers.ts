import { useCallback } from 'react';
import { ISchedule } from '../interfaces/schedule.interfaces';
import { ScheduleCardProps } from '../components/ScheduleCard/schedulecard.interfaces';

export const useHandleSchedule = () => {
  const handleSchedule = useCallback(
    (schedule: ISchedule): ScheduleCardProps => {
      const { start_time, end_time, tags, place, title, users } = schedule;
      const dateStart = new Date(start_time);
      const dateEnd = new Date(end_time);

      const day = dateStart.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
      });
      const startTime = dateStart.toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
      });
      const endTime = dateEnd.toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
      });

      return {
        day,
        startTime,
        endTime,
        tags,
        place,
        title,
        users,
      };
    },
    []
  );

  return { handleSchedule };
};
