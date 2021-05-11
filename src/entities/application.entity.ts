import { Theme } from './theme.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Application {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '主键id',
  })
  id: string

  @Column({
    type: 'varchar',
    name: 'name',
    comment: '应用名称',
  })
  name: string

  @ManyToOne(
    () => Theme,
    theme => theme.applications,
  )
  theme: Theme

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
