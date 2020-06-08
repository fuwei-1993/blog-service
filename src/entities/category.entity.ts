import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { DateBase } from './date'
import { User } from './user.entity'
import { Article } from './article.entity'

enum Sort {
  DESC = 'DESC',
  ASC = 'ASC',
}

@Entity('category')
export class Category extends DateBase {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number

  @Column({
    type: 'varchar',
    name: 'name',
    comment: '分类名称',
  })
  name: string

  @Column({
    type: 'varchar',
    name: 'description',
    comment: '分类描述',
  })
  description: string

  @Column({
    type: 'enum',
    enum: Sort,
    comment: '分类排序',
  })
  sort: string

  @ManyToOne(
    () => User,
    user => user.categories,
  )
  user: User

  @OneToMany(
    () => Article,
    article => article.category,
  )
  articles: Article[]
}
