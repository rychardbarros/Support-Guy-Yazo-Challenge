import { DateTime } from 'luxon'
import {
    column,
    manyToMany,
    ManyToMany,
  } from '@ioc:Adonis/Lucid/Orm'
import BaseModel from 'App/Shared/Models/BaseModel'

import User from 'App/Modules/Accounts/Models/User'

export default class Schedule extends BaseModel {
    public static table = 'schedules'

    @column({ isPrimary: true }) 
    public id: number

    @column()
    public title: string

    @column()
    public place: string

    @column()
    public start_time: DateTime

    @column()
    public end_time: DateTime

    @column({ serializeAs: null })
    public is_deleted: boolean
  
    @column.dateTime({ autoCreate: true, serializeAs: null })
    public created_at: DateTime
  
    @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
    public updated_at: DateTime
  
    @column.dateTime({ autoUpdate: true, serializeAs: null })
    public deleted_at: DateTime

    /**
   * ------------------------------------------------------
   * Relationships
   * ------------------------------------------------------
   * - define User model relationships
   */
    @manyToMany(() => Tag, {
        localKey: 'id',
        pivotForeignKey: 'schedule_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'tag_id',
        pivotTable: 'schedule_tags',
      })
      public tags: ManyToMany<typeof Tag>

    @manyToMany(() => User, {
        localKey: 'id',
        pivotForeignKey: 'schedule_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'user_id',
        pivotTable: 'schedule_users',
      })
      public users: ManyToMany<typeof User>


}