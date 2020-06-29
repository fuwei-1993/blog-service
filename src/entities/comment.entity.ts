import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'

import { Article } from './article.entity'
import { Transform } from 'class-transformer'

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn({
    comment: '主键id',
    type: 'int',
    name: 'id',
  })
  id: number

  @Column({
    type: 'varchar',
    name: 'description',
    comment: '评论内容',
  })
  content: string

  @ManyToOne(
    () => Article,
    article => article.comments,
  )
  article: Article

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    comment: '创建时间',
  })
  @Transform(date => +new Date(date))
  createdAt: Date

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    comment: '更新时间',
  })
  @Transform(date => +new Date(date))
  updatedAt: Date
}
