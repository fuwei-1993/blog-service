import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Application } from './application.entity'

@Entity()
export class Theme {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '主键id',
  })
  id: string

  @Column({
    type: 'varchar',
    name: 'name',
    comment: '主题名称',
    length: 50,
  })
  name: string

  @Column({
    type: 'varchar',
    name: 'description',
    comment: '主题描述',
    length: 50,
    nullable: true,
  })
  description?: string

  @Column({
    type: 'int',
    name: 'theme_file_id',
    comment: '主题文件id',
  })
  themeFileId: number

  @OneToMany(
    () => Application,
    application => application.theme,
  )
  applications: Application[]

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    comment: '最后更新时间',
  })
  updatedAt: Date
}
