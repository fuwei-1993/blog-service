import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from './user.entity'
import { DateBase } from './date'
import { Category } from './category.entity'

enum Status {
  PUBLIC = 'public',
  DRAFT = 'draft',
}

@Entity('article')
export class Article extends DateBase {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number

  @Column({
    type: 'varchar',
    name: 'title',
    length: 50,
    comment: '文章标题',
  })
  title: string

  @Column({
    type: 'varchar',
    name: 'keyword',
    comment: '文章关键字',
  })
  keyword: string

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PUBLIC,
    comment: '文章状态',
    name: 'status',
  })
  status: number

  @Column({
    type: 'boolean',
    name: 'publish',
    comment: '文章是否公开',
    default: true,
  })
  publish: boolean

  @Column({
    type: 'simple-json',
    name: 'meta',
    comment: '文章元数据',
  })
  meta: {
    views: number
    likes: number
    comments: number
  }

  @ManyToOne(
    () => User,
    user => user.articles,
  )
  user: User

  @ManyToOne(
    () => Category,
    category => category.articles,
  )
  category: Category
}
