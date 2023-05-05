import { ModelType } from 'App/Shared/Interfaces/BaseInterface'
import Schedule from '../Models/Schedule'
import { DateTime } from 'luxon'

type ScheduleDefaultType = ModelType<typeof Schedule> & { tagIds: Array<number> } & {userIds: Array<number>}


export const SchedulesDefault: Array<ModelType<typeof ScheduleDefaultType>> = [
    {
        title: 'Schedule 1',
        place: 'Yazo`s House',
        start_time: DateTime.fromISO('2023-05-05T09:00:00').toSQL(),
        end_time: DateTime.fromISO('2023-05-05T10:00:00').toSQL(),
        tagIds: [1, 2],
        userIds: [1]
    },
    {
        title: 'Schedule 2',
        place: 'Yazo`s House',
        start_time: DateTime.fromISO('2023-05-05T11:00:00').toSQL(),
        end_time: DateTime.fromISO('2023-05-05T12:00:00').toSQL(),
        tagIds: [2, 3],
        userIds: [1, 2]
    },
    {
        title: 'Schedule 3',
        place: 'Yazo`s House',
        start_time: DateTime.fromISO('2023-05-06T09:00:00').toSQL(),
        end_time: DateTime.fromISO('2023-05-06T10:00:00').toSQL(),
        tagIds: [1],
        userIds: [3]
    }
]