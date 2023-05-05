import { injectable, inject } from 'tsyringe'

import { ISchedule } from '../Interfaces/ISchedule'
import Schedule from '../Models/Schedule'
import { PaginateContractType } from 'App/Shared/Interfaces/BaseInterface'

import { SchedulesDefault } from '../Defaults'

import DTOs = ISchedule.DTOs

@injectable()
export default class ScheduleServices {
    constructor(
        @inject('SchedulesRepository')
        private schedulesRepository: ISchedule.Repository
    ){}

    public async list({
        page = 1,
        perPage = 10,
    }: DTOs.List): Promise<PaginateContractType<typeof Schedule>> {
        return this.schedulesRepository.listWithPagination({
            page,
            perPage
        })
    }

    public async store(data: DTOs.Store): Promise<Schedule> {
        const schedule = await this.schedulesRepository.store(data)

        return schedule.refresh()
    }
}