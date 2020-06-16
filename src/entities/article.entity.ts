import {
  UpdateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Category } from './category.entity'
import { ArticleStatus } from 'src/controllers/article/interface/article.interface'

@Entity('article')
export class Article {
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
    enum: ArticleStatus,
    default: ArticleStatus.PUBLIC,
    comment: '文章状态',
    name: 'status',
  })
  status: ArticleStatus

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

  @Column({
    type: 'varchar',
    name: 'thumb',
    comment: '文章略缩图',
  })
  thumb: string

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

  @Column({
    type: 'varchar',
    comment: '文章内容',
    name: 'content',
  })
  content: string

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
